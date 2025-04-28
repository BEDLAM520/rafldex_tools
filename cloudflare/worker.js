addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const url = new URL(request.url);
	const address = url.searchParams.get("address");

	if (!address) {
		return new Response("Address parameter is missing", { status: 400 });
	}

	const response = await fetch(`https://api.mainnet-beta.solana.com`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			jsonrpc: "2.0",
			id: 1,
			method: "getSignaturesForAddress",
			params: [address, { limit: 1000, before: null }],
		}),
	});

	const data = await response.json();
	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
}
