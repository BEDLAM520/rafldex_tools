import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface RafldexParticipantResponse {
  participants: string[];
}

interface ErrorResponse {
  error: string;
  details?: string;
}

// Simple in-memory cache (Edge-compatible; ephemeral per instance)
const cache = new Map<string, { data: string[]; timestamp: number }>();

// Simple in-memory rate limiter
const requestTimestamps = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 5000; // 5 seconds between calls per IP

export default async function handler(req: NextRequest): Promise<NextResponse<{ entrants: string[] } | ErrorResponse>> {
  if (req.method !== 'GET') {
    return new NextResponse(JSON.stringify({ error: `Method ${req.method} Not Allowed` }), {
      status: 405,
      headers: { 'Allow': 'GET', 'Content-Type': 'application/json' },
    });
  }

  const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // Rate limit per IP
  const lastRequestTime = requestTimestamps.get(clientIP) || 0;
  if (now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
    return NextResponse.json({ error: 'Rate limit exceeded. Try again shortly.' }, { status: 429 });
  }
  requestTimestamps.set(clientIP, now);

  const { searchParams } = new URL(req.url);
  const entrantsQuery = searchParams.get('entrants');

  if (!entrantsQuery || typeof entrantsQuery !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid entrants parameter' }, { status: 400 });
  }

  const entrantAddresses = entrantsQuery
    .split(',')
    .map((addr) => addr.trim())
    .filter((addr) => addr.length > 0);

  if (entrantAddresses.length === 0) {
    return NextResponse.json({ error: 'No valid entrant addresses provided' }, { status: 400 });
  }

  const CACHE_TTL_MS = 60_000; // 1 minute cache per address
  const uniqueEntrants = new Set<string>();

  try {
    for (const address of entrantAddresses) {
      const cacheKey = `participants-${address}`;
      const cached = cache.get(cacheKey);

      if (cached && now - cached.timestamp < CACHE_TTL_MS) {
        console.log(`Cache hit for ${address}`);
        cached.data.forEach((p) => uniqueEntrants.add(p));
        continue;
      }

      const apiUrl = `https://api.rafldex.io/raffle-participants/${address}`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        console.warn(`Failed to fetch participants for ${address}: ${res.status}`);
        continue;
      }

      const data: RafldexParticipantResponse = await res.json();
      data.participants.forEach((p) => uniqueEntrants.add(p));

      cache.set(cacheKey, { data: data.participants, timestamp: now });
    }

    return NextResponse.json({ entrants: Array.from(uniqueEntrants) }, { status: 200 });

  } catch (error: unknown) {
    console.error('Handler Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown processing error occurred';
    return NextResponse.json({ error: 'Failed to fetch raffle participants', details: errorMessage }, { status: 500 });
  }
}
