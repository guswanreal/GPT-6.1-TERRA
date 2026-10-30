# VELOCÉ — virtual automotive showroom

A Next.js App Router demo for browsing eight vehicles, exploring a procedural React Three Fiber showroom, comparing vehicles, simulating credit and trade-in, and saving a local wishlist, configurations and booking requests.

## Run locally

```sh
npm ci
npm run dev
```

Open the application on port 3000. `npm run build` validates the production build and `npm start` starts it. The showroom uses a procedural vehicle and a generated studio environment; no external GLB file is required. Drag to orbit, scroll to zoom and click the three hotspots to focus the camera. The model is an illustrative placeholder rather than a vehicle-specific replica.

Vehicle images are remote illustrative photographs and require internet access. Vehicle data in `lib/data.ts`, prices, specifications, financing and trade-in estimates are illustrative. Exterior and interior tabs currently show illustrative photographs, not actual 360-degree or panoramic media.

Wishlist, configuration history and booking requests are stored only in browser localStorage. Booking is a local demonstration: it does not contact a dealer, reserve inventory, authenticate a user or process payments. The Prisma schema in `prisma/schema.prisma` is a starting point for PostgreSQL integration; the application currently does not connect to a database. Connect a database, authentication, inventory and payment providers before using it for actual transactions. Never place credentials in the client bundle.
