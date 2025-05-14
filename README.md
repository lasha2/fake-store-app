# Fake Store App

A simple e-commerce web application built with **Next.js (App Router)**, **React hooks**, and **CSS Modules**, fetching data from [Fake Store API](https://fakestoreapi.com). It demonstrates:

* **Route-based** pages: Products, Product Details, Profile, Cart
* **Client and Server Components**
* **`useState`** and **`useEffect`** hooks for client-side fetching
* **Async/Await** data loading and loading states
* **CSS Modules** for scoped styling

## Features

* **Products Page** (`/products`): Lists all products with images, titles, and prices.
* **Product Details** (`/product/details/[id]`): Shows a single product’s image, title, description, and price.
* **Profile Page** (`/profile`): Displays user information from the API.
* **Cart Page** (`/cart`): Fetches cart data, then individual products; allows quantity adjustments (1–10).
* **Layout**: Shared `NavBar` and `Footer` components across all pages.
* **Fixed Footer**: Stays at the bottom of the viewport.
* **SD**: Uses Next.js App Router with `src/app` directory.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd fake-store-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run in development mode**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```
   ```

[http://localhost:3000/products](http://localhost:3000/products)

```

## Project Structure

```

src/
app/
layout.js            # Root layout with NavBar & Footer
globals.css          # Global styles
components/
NavBar.js
NavBar.module.css
Footer.js
Footer.module.css
products/
page.js            # Products listing page
page.module.css
product/
details/\[id]/
page.js          # Product details page (server component)
page.module.css
profile/
page.js            # Profile page (client component)
page.module.css
cart/
page.js            # Cart page (client component)
page.module.css

```

## Styling

- **CSS Modules** provide scoped class names to avoid conflicts.
- Global font and layout in `globals.css`.
- Footer is fixed to the bottom via CSS.

## Data Fetching

- **Server Component**: Product Details uses `fetch` in a server component, leveraging Next.js SSR.
- **Client Components**: Products, Profile, and Cart use `useEffect` for client-side fetching.

## Notes

- Ensure network access to `https://fakestoreapi.com`.
- Feel free to extend: add authentication, secure API routes, improve styling, or integrate a real backend.

---

© 2025 Fake Store App

```
