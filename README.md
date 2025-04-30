# Rafldex Snapshot Tool For Hosts by BEDLAM520 Development

## Introduction

A web application built with Next.js (using Tailwind CSS v3) and deployed on Cloudflare Pages. It's designed to fetch raffle participant data directly from the Rafldex API for one or more Raffle IDs, display the participants, aggregate data across raffles, and allow exporting the data.

## Features

*   **Fetch Multiple Raffle Data:** Enter one or more comma-separated Raffle IDs/Addresses to retrieve participant wallet addresses and ticket counts directly from the Rafldex API for each specified raffle.
*   **Individual Raffle Display:** Presents fetched participant data (`userWalletAddress` and optionally `ticketsBought`) for each successfully fetched raffle in clear, scrollable tables.
*   **Conditional Display:** Includes a checkbox to toggle the visibility of the "Tickets Bought" column in the tables.
*   **Individual Data Export:** Allows downloading the participant data (wallet address and tickets bought) for *each individual raffle* as a CSV or JSON file.
*   **Aggregated Data Export:** Provides "Download ALL" buttons (CSV/JSON) that combine data from *all* successfully fetched raffles. This export:
    *   Identifies unique wallet addresses across all raffles.
    *   Sums the total `ticketsBought` for each unique address.
    *   Purges duplicate address entries, providing a clean list with aggregated ticket counts.
*   **Status Indicators:** Shows loading states and error messages for each raffle fetch attempt.
*   **Edge Deployment:** Hosted on Cloudflare Pages for global performance and low latency.

## How it Works

This application simplifies fetching and consolidating raffle data:

1.  **Frontend (Cloudflare Pages):**
    *   A Next.js application provides the user interface, styled with Tailwind CSS.
    *   It's built and deployed to Cloudflare Pages.
    *   When a user enters one or more Raffle IDs (comma-separated) and clicks "Fetch Participants", the frontend sends parallel requests to the public Rafldex API (`https://api.rafldex.io/raffle-participants/{raffleId}`) for each ID.
2.  **Rafldex API:**
    *   The external Rafldex API processes each request and returns the participant data for the specified raffle.
3.  **Data Flow & Processing:**
    *   User Interaction (Input + Click) -> Frontend API Requests (to Rafldex API for each ID) -> Rafldex API Responses -> Frontend:
        *   Processes and displays data for each raffle individually.
        *   Enables individual downloads per raffle.
        *   For "Download ALL": Aggregates data across all successful fetches, summing tickets for duplicate addresses before enabling the combined download.

## Technology Stack

*   **Frontend:**
    *   **Framework:** Next.js, React, TypeScript
    *   **Styling:** Tailwind CSS v3
    *   **UI Components:** Custom components (`@/components/ui`)
*   **Deployment:**
    *   Cloudflare Pages

## Setup and Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/BEDLAM520/rafldex_tools.git
    cd rafldex_tools
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Environment Variables:**
    *   No specific environment variables (`.env.local`) are required for the core functionality as the application calls the public Rafldex API directly from the frontend.
4.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    Open `http://localhost:3000` (or the specified port) in your browser.

## Deployment

### Cloudflare Pages

1.  **Push to GitHub/GitLab:**
    *   Ensure your code is pushed to your Git repository (`BEDLAM520/rafldex_tools`).
2.  **Connect to Cloudflare Pages:**
    *   Log in to your Cloudflare dashboard.
    *   Go to Workers & Pages -> Create application -> Pages -> Connect to Git.
    *   Select your repository.
3.  **Configure Build Settings:**
    *   **Framework preset:** Select `Next.js`.
    *   **Build command:** `npm run build` (or `yarn build`)
    *   **Build output directory:** (Leave default for Next.js preset)
4.  **Environment Variables (Cloudflare Build):**
    *   Set `NODE_VERSION` to a compatible version (e.g., `18.18.0` or `20`).
5.  **Compatibility Flags (Cloudflare Settings):**
    *   After the first deployment, ensure the `nodejs_compat` flag is enabled in your Pages project settings (Settings -> Functions -> Compatibility Flags) for both Production and Preview environments.
6.  **Deploy:**
    *   Save and Deploy. Cloudflare Pages will build and deploy your Next.js application.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs, feature requests, or improvements.
