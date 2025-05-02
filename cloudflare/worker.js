const allowedOrigins = ['http://localhost:3000', 'https://api.rafldex.io'];

addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request));
});

const RAFLDEX_API_BASE_URL = "https://api.rafldex.io";

async function handleRequest(request) {
	const url = new URL(request.url);
	const address = url.searchParams.get("address");

	if (!address) {
		return new Response("Address parameter is missing", { status: 400 });
	}
	const apiUrl = `${RAFLDEX_API_BASE_URL}/${address}`;

	const origin = request.headers.get('Origin');
	const corsHeaders = {
		'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Max-Age': '86400',
	};

	if (request.method === 'OPTIONS') {
		if (origin && allowedOrigins.includes(origin)) {
			corsHeaders['Access-Control-Allow-Origin'] = origin;
			return new Response(null, { headers: corsHeaders });
		} else {
			return new Response('Origin not allowed', { status: 403 });
		}
	}

	if (origin && allowedOrigins.includes(origin)) {
		corsHeaders['Access-Control-Allow-Origin'] = origin;
	}

	try {
		const response = await fetch(apiUrl, {
			method: "GET",
			headers: {
				"Accept": "application/json",
			},
		});

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: response.status,
			headers: {
				...response.headers,
				...corsHeaders,
				'Content-Type': 'application/json',
			}
		});

	} catch (error) {
		console.error("Error fetching from Rafldex API:", error);
		return new Response("Error fetching data from backend API", {
			status: 500,
			headers: corsHeaders
		});
	}
}