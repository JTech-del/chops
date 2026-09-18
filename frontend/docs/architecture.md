
---

# 4. `architecture.md`

This is probably the most important one from an engineering perspective.

It should document **how the application is structured and why**.

```md
# Chops — Architecture

## 1. Architecture Overview

Chops is currently a React frontend application using a modular
component architecture.

The application is intentionally structured so that future backend
integration can be introduced without requiring a complete frontend
rewrite.

---

# 2. Technology Stack

## Frontend

- React
- Vite
- React Router
- JavaScript
- CSS

## Development

- ESLint
- npm

---

# 3. Application Structure

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── cart/
│   ├── checkout/
│   ├── common/
│   ├── foodDetails/
│   ├── gallery/
│   ├── home/
│   ├── layout/
│   ├── menu/
│   ├── orders/
│   ├── payment/
│   └── reservations/
├── context/
├── data/
├── hooks/
├── pages/
├── routes/
├── services/
├── styles/
└── utils/