# Rafldex Snapshot Tool For Hosts by BEDLAM520 Development

## Introduction

	A web application built with Next.js and deployed on Cloudflare Pages,
		designed to fetch, display, and track entries for Solana-based raffles
			associated with a specific Entrant Address or Addresses.

	Backend logic is handled either by Next.js API routes running as Cloudflare
		Functions or a dedicated Cloudflare Worker.

## Features

*   **Fetch Raffle Data:**

		Enter the Entrant Address of the raffle to retrieve relevant entry information.

*   **Data Display:**

		Presents fetched data in a clear, tabular format.

*   **Data Export:**

		Allows downloading the fetched raffle data as a CSV or JSON file.

*   **Serverless Backend:**

		Utilizes Cloudflare Functions (via Next.js API routes) or a
			dedicated Cloudflare Worker for efficient
				and scalable backend logic.

*   **Edge Deployment:**

		Hosted on Cloudflare Pages for global performance and low latency.

## How it Works

	This application leverages Cloudflare's serverless platform:

1.  **Frontend (Cloudflare Pages):**

		A Next.js application provides the user interface.

		It's built and deployed to Cloudflare Pages, serving static assets quickly and
			running dynamic parts (like API routes) as Cloudflare Functions.

		When a user enters a wallet address/raffle ID and clicks "Fetch Data", the
			frontend sends an API request.

2.  **Backend (Cloudflare Functions / Worker):**

	*   **Option A (Next.js API Routes):**

			API routes defined within the `pages/api/` directory of the Next.js
				app are deployed as serverless Cloudflare Functions. These
					functions receive requests from the frontend.

	*   **Option B (Dedicated Cloudflare Worker):**

			A separate Cloudflare Worker acts as the serverless API backend,
				receiving requests from the frontend.

		In either case, the backend logic interacts directly with the Solana
			blockchain (via an RPC endpoint) using Solana Web3 libraries
				(like `@solana/web3.js`) to query for raffle entries.

		It processes the data received from the blockchain and formats it into
			a suitable structure (e.g., JSON).

		The backend sends the processed data back to the frontend.

3.  **Data Flow:**

		User Interaction (Input + Click) -> Frontend API Request ->
			Cloudflare Function (Next.js API Route) OR Cloudflare Worker ->
				Solana RPC Call -> Solana Blockchain -> RPC Response ->
					Backend Logic (Data Processing) -> API Response ->
						Frontend (Display Data).

## Technology Stack

*   **Frontend:**

	*   **Framework:**

			Next.js, React, TypeScript

	*   **UI Components:**

			Custom components (potentially using a library like Tailwind CSS)

*   **Backend:**

	*   **Serverless:**

			Cloudflare Functions (via Next.js API Routes) and/or
				Cloudflare Workers, TypeScript

	*   **Deployment:**

			Cloudflare Pages (Frontend + Next.js API Routes),
				Cloudflare Workers (Optional Dedicated Backend)

	*   **Blockchain Interaction:**

			`@solana/web3.js` (or similar Solana library)

	*   **Fetching (if using API routes):**

			native `fetch`

## Setup and Running Locally

	You can run the Next.js frontend locally for development.

	Backend logic within API routes will run locally, while a
		dedicated worker might require separate simulation.

1.  **Clone the repository:**

	```
		bash
		git clone https://github.com/bedlam520Dev/rafldex_snapshot.git
		cd rafldex_snapshot
	```

2.  **Install Dependencies:**

	```
		bash
		npm install
		# or
		yarn install
	```

3.  **Environment Variables:**

		Create a `.env.local` file in the root directory.

	*   **If using a dedicated Cloudflare Worker:**

		Configure the worker's URL:

			```
				plaintext
				# .env.local
				NEXT_PUBLIC_WORKER_URL=https://your-worker-name.your-account.workers.dev
			```

	*   **If using Next.js API routes:**

			You might need environment variables for secrets like
				RPC URLs, accessible server-side (e.g., `SOLANA_RPC_URL=...`).
					These should *not* be prefixed with `NEXT_PUBLIC_`.

	*   **(Optional)**

			If a dedicated worker needs specific environment variables
				(like an RPC URL), configure those separately when deploying
					the worker (see Cloudflare Worker setup).

4.  **Run the Frontend Development Server:**

	```
		bash
		npm run dev
		# or
		yarn dev
	```

		Open http://localhost:3000 in your browser.
			This will also run your `pages/api/*` routes locally.

5.  **Running a Dedicated Worker Locally (Optional):**

		If your project includes a *separate* worker code directory
			(e.g., `/worker`), navigate to it.

		Install Wrangler CLI: `npm install -g wrangler`

		Run locally: `wrangler dev` (This might require additional
			configuration in `wrangler.toml`).

## Deployment

### Dedicated Cloudflare Worker (Optional)

	*If you are using a separate worker for backend logic:*

1.  **Configure `wrangler.toml`:**

		Ensure your worker's configuration file (`wrangler.toml`)
			is set up with the correct account ID, worker name,
				and any necessary environment variables or
					secrets (like Solana RPC endpoints).

2.  **Deploy:**

	```
		bash
		# Navigate to your worker directory if separate
		wrangler deploy
	```

		Note the URL of your deployed worker.

### Cloudflare Pages (Frontend + API Routes)

1.  **Push to GitHub/GitLab:**

		Ensure your code is pushed to a Git repository.

2.  **Connect to Cloudflare Pages:**

		Log in to your Cloudflare dashboard.

		Go to Workers & Pages -> Create application ->
			Pages -> Connect to Git.
				Select your repository (`bedlam520Dev/rafldex_snapshot`).

3.  **Configure Build Settings:**

	*   **Framework preset:**

			Select `Next.js`. Cloudflare usually detects this automatically.

	*   **Build command:**

			`npm run build` (or `yarn build`)

	*   **Build output directory:**

			(Leave default for Next.js preset, usually `.next` or
				handled automatically by `@cloudflare/next-on-pages`)

4.  **Environment Variables:**

	*   **If using a dedicated worker:**

			Add `NEXT_PUBLIC_WORKER_URL` in the Pages settings,
				pointing to your deployed worker URL.

	*   **If using Next.js API routes:**

			Add any *server-side* environment variables needed
				by your API routes (e.g., `SOLANA_RPC_URL`).
					Do **not** prefix these with `NEXT_PUBLIC_`.
						Add any *client-side* variables prefixed
							with `NEXT_PUBLIC_`.

5.  **Deploy:**

	*   **Save and Deploy.**

		Cloudflare Pages will build your Next.js
			application and deploy both the static frontend
				and the API routes as functions.

## Contributing

		Contributions are welcome! Please feel free to submit
			pull requests or open issues for bugs,
				feature requests, or improvements.