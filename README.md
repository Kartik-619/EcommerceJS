<h2>🛒 Full-Stack E-Commerce Platform</h2>
<br>
A full-stack e-commerce application built from scratch with a strong focus on backend architecture, clean API design, real-world workflows, and modern UI animations.
This project simulates a real production e-commerce system including authentication, cart management, order processing, and checkout experience.
<br>
<h3>🚀 Tech Stack</h3>
<br><h4>Frontend</h4>
<br>
React

Tailwind CSS

Zustand

GSAP – advanced UI animations & micro-interactions

Three.js – interactive 3D elements for enhanced user experience

Axios – API communication

React Router – routing & protected routes
<br>
<h4>Backend</h4>

Node.js

Express.js

MySQL

Prisma ORM

JWT Authentication (Cookie-based)

RESTful API architecture
<br>
<h4>Tooling & Dev</h4>

Git & GitHub

Postman

VS Code
<br>
<h3>✨ Features</h3><br>
<h3>🔐 Authentication & Authorization</h3>
<br>
Secure JWT-based authentication

HTTP-only cookies

Protected routes (frontend & backend)

Role-based user handling
<br>
<h3>🛍️ Product & Cart System</h3>
<br>
Product listing with pricing

User-specific cart

Quantity updates

Real-time subtotal & tax calculations

Persistent cart per logged-in user
<br>
<h3>📦 Order Management</h3>
<br>
Order creation from cart

Order items stored with snapshot pricing

Order status lifecycle (pending → confirmed)

Cart cleanup after order creation
<br>
<h3>💳 Checkout Flow (Simulated Payment)</h3>
<br>
Checkout summary page

Mock payment flow (no third-party gateway dependency)

Payment stimulation UI for UX realism

Order confirmation page after successful checkout
<br>
<h3>🎨 UI & Animations</h3>
<br>
GSAP animations for:

Page transitions

Payment flow effects

Text & UI micro-interactions

<h4>Three.js used for:</h4>

Interactive visual elements

Enhancing user engagement beyond static UI

Animated order success page with:

Truck animation 🚚 moving left → right
<br>
Celebration effects 🎉
<br>
<h3>🧭 UX Enhancements</h3>

Scroll-to-top on route change

Responsive layout

Clean component structure

User-friendly feedback states (loading / errors)
<br>
<h3>🧠 What I Learned</h3><br>
<h4>Backend & System Design</h4>

Designing backend-first applications

Structuring Prisma schemas & relations

Handling real-world order & cart workflows

Writing scalable REST APIs

Middleware-based authentication & request validation

<h4>Frontend Engineering</h4>

Managing state across complex flows

Building reusable UI components

Handling protected routes properly

Integrating animations without harming performance

Animations & UX

Using GSAP beyond basic animations

Synchronizing animations with user actions

Using Three.js meaningfully (not just visual noise)

Improving perceived performance with motion

<h4>Debugging & Real-World Issues</h4>

Prisma validation & schema mismatches

Auth token & cookie debugging

API error handling

<h3>Frontend ↔ backend data consistency</h3>
<br>
🧩 Project Structure (High Level)<br>
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── animations/
│   ├── hooks/
│   └── services/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── prisma/
│   └── utils/
│
└── README.md

<br><h3>🔮 Future Improvements</h3>
<br>
Real payment gateway integration (Razorpay / Stripe)

Order history & tracking

Admin dashboard

Inventory management

Email notifications

Webhooks for payment confirmation
<br>
prove.
