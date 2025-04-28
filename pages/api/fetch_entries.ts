import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface RafldexParticipantResponse {
	participants: string[];
}

interface SuccessResponse {
	entrants: string[];
}

interface ErrorResponse {
	error: string;
	details?: string;
}

const cache = new Map<string, { data: string[]; timestamp: number }>();

const requestTimestamps = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 5000;
const CACHE_TTL_MS = 60_000;

export default async function handler(req: NextRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
	if (req.method !== 'GET') {
		return new NextResponse(JSON.stringify({ error: `Method ${req.method} Not Allowed` }), {
			status: 405,
			headers: { 'Allow': 'GET', 'Content-Type': 'application/json' },
		});
	}

	let clientIP = req.headers.get('x-forwarded-for') || 'unknown';
	if (clientIP === 'unknown' && req.headers.has('x-real-ip')) {
		clientIP = req.headers.get('x-real-ip') || 'unknown';
	}

	const now = Date.now();
	const lastRequestTime = requestTimestamps.get(clientIP) || 0;

	if (now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
		console.warn(`Rate limit exceeded for IP: ${clientIP}`);
		return NextResponse.json({ error: 'Rate limit exceeded. Try again shortly.' }, { status: 429 });
	}
	requestTimestamps.set(clientIP, now);

	const { searchParams } = new URL(req.url);
	const raffleId = searchParams.get('raffleId');

	if (!raffleId || typeof raffleId !== 'string' || raffleId.trim().length === 0) {
		return NextResponse.json({ error: 'Missing or invalid raffleId parameter' }, { status: 400 });
	}
	const trimmedRaffleId = raffleId.trim();

	const cacheKey = `participants-${trimmedRaffleId}`;
	const cached = cache.get(cacheKey);

	if (cached && now - cached.timestamp < CACHE_TTL_MS) {
		console.log(`Cache hit for raffleId: ${trimmedRaffleId}`);
		return NextResponse.json({ entrants: cached.data }, { status: 200 });
	}
	console.log(`Cache miss or expired for raffleId: ${trimmedRaffleId}`);

	try {
		const apiUrl = `https://api.rafldex.io/raffle-participants/${trimmedRaffleId}`;
		console.log(`Fetching from: ${apiUrl}`);

		const res = await fetch(apiUrl, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
			}
		});

		if (!res.ok) {
			let errorDetails = `Status code: ${res.status}`;
			try {
				const errorData = await res.json();
				errorDetails += `, Body: ${JSON.stringify(errorData)}`;
			} catch (e) {

				errorDetails += `, Body: ${await res.text()}`;
			}
			console.error(`Failed to fetch participants for ${trimmedRaffleId}: ${errorDetails}`);
			if (res.status === 404) {
				return NextResponse.json({ error: 'Raffle not found.' }, { status: 404 });
			}
			return NextResponse.json({ error: 'Failed to fetch raffle participants from external API.', details: errorDetails }, { status: res.status > 499 ? 502 : res.status });
		}

		const data: RafldexParticipantResponse = await res.json();

		const participants = Array.isArray(data.participants) ? data.participants : [];
		cache.set(cacheKey, { data: participants, timestamp: now });
		console.log(`Successfully fetched and cached ${participants.length} participants for ${trimmedRaffleId}`);

		return NextResponse.json({ entrants: participants }, { status: 200 });

	} catch (error: unknown) {
		console.error(`Handler Error for raffleId ${trimmedRaffleId}:`, error);
		const errorMessage = error instanceof Error ? error.message : 'An unknown processing error occurred';
		return NextResponse.json({ error: 'Internal server error while processing the request.', details: errorMessage }, { status: 500 });
	}
}
