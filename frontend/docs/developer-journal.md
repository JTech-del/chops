# Chops — Developer Journal

## Project Overview

Chops is a portfolio-grade restaurant ordering web application built
to demonstrate modern frontend engineering, responsive UX, reusable
React architecture, state management, and production-oriented design.

The application is intentionally being developed in phases, with each
phase verified before the next phase begins.

---

# Development Log

## Phase 1 — Project Foundation

### Completed
- Initialized Vite + React application.
- Established project structure.
- Configured React Router.
- Established lowercase file and folder naming convention.
- Confirmed local development server.
- Confirmed production build.

### Verification
- `npm run dev` — passed
- `npm run build` — passed

---

## Phase 2 — Application Shell

### Completed
- Navbar
- Footer
- Mobile bottom navigation
- Global application layout
- Route structure

### Verification
- Desktop layout checked
- Mobile navigation checked
- Production build passed

---

## Phase 3 — Theme System

### Completed
- Global light/dark theme system
- CSS design tokens
- Theme persistence with localStorage
- System preference detection
- Initial theme flash prevention
- Desktop/mobile theme toggle
- Accessible theme controls

### Storage
- `chops-theme`

### Verification
- Light theme checked
- Dark theme checked
- Reload persistence checked
- Production build passed

---

## Phase 4 — Menu

### Completed
- Menu data architecture
- Category filtering
- Menu cards
- Food images
- Ratings and review counts
- Featured items
- Add-to-cart interaction

### Current Menu
- 16 menu items
- 7 categories

### Verification
- Category filtering checked
- Food detail navigation checked
- Add-to-cart checked
- Production build passed

---

## Phase 5 — Food Details

### Completed
- Food information
- Quantity selector
- Rich dish details
- Sticky ordering panel
- Food gallery
- Related dishes
- Frequently ordered together

### Customization Progress

#### 8.1 — Customization Data Architecture
Status: Complete

Established:

- Sizes
- Add-ons
- Individual option IDs
- Option names
- Option prices

#### 8.2 — Menu Customization Data
Status: Complete

Customization data added to applicable menu items without changing
their original base prices.

#### 8.3 — Customization Component
Status: Complete

Implemented:

- Size selection
- Add-on selection
- Radio controls
- Checkbox controls
- Selected states
- Responsive layout
- Theme-aware styling
- Keyboard focus states

### Verification
- `npm run build` — passed

---

# Current Development State

## Active Feature

Food Details customization system.

## Last Completed Step

8.3 — Customization Component

## Next Step

8.4 — Dynamic Customization Pricing

---

# Engineering Rules

1. Do not modify completed features unnecessarily.
2. Verify each implementation step before proceeding.
3. Preserve existing working functionality.
4. Use lowercase naming for files and folders.
5. Keep menu base prices separate from customization prices.
6. Do not introduce fake customer reviews or testimonials.
7. Prefer reusable components over page-specific duplication.
8. Keep the application production-oriented even while it remains a demo.

## Reservations — Frontend Request Flow

### Completed

The Reservations experience was implemented as the next major Chops ordering-adjacent milestone.

Completed functionality:

- Reservations page foundation
- Reservation form
- Reservation Context
- Persistent reservation form state
- Required-field validation
- Submission handling
- Loading state
- Reservation request success state
- Reservation summary
- Make Another Reservation flow
- Responsive/mobile styling
- Light/dark theme support
- Production build verification

### Reservation Context

Reservation state is managed centrally through `ReservationContext`.

The context stores:

- date
- time
- guests
- name
- phone
- special request

Reservation form data persists through localStorage using:

`chops-reservation`

The context also manages:

- `isSubmitting`
- `isSubmitted`
- `submitReservation()`
- `resetReservation()`

### Submission Architecture

The frontend currently simulates a reservation request using a short asynchronous delay.

The implementation intentionally uses:

`Request Reservation`

rather than:

`Book Table`

because no real availability or reservation backend exists yet.

The success state communicates that the request has been received and that final confirmation would occur through the restaurant's reservation system.

### Validation

Required fields use native browser validation.

The form submission handler:

1. prevents the browser's default submission
2. checks form validity
3. reports invalid fields
4. starts the simulated request
5. displays the success state

### Success Experience

After submission, the form is replaced by a dedicated confirmation state.

The confirmation includes:

- success indicator
- request-received messaging
- customer name
- reservation date
- reservation time
- guest count
- phone number
- frontend-demo clarification
- Make Another Reservation action

### Verification

Production build passed after the reservation implementation.

Browser verification confirmed:

- required-field validation
- successful submission
- loading state
- success state
- reservation persistence
- reset behavior
- theme switching
- responsive/mobile behavior

### Future Backend Architecture

The current frontend flow is designed to evolve into:

Frontend request
      ↓
Reservation API
      ↓
Availability check
      ↓
Restaurant confirmation
      ↓
Confirmed reservation

No backend availability logic is implemented at the current MVP stage.


## Contact Page — Foundation Complete

### Date

September 2026

### Status

Completed and verified.

### What was implemented

Built the Chops Contact page from an empty placeholder into a complete responsive restaurant contact experience.

The page now includes:

* Contact hero section
* Contact information section
* Visit Us information
* Contact form
* Name, email, phone, subject, and message fields
* Native browser form validation
* Demo submission state
* "Send Another Message" reset flow
* Map/location-ready visual placeholder
* Menu CTA
* Reservation CTA
* Responsive desktop, tablet, and mobile layouts
* Light and dark theme support
* Keyboard focus states
* Reduced-motion support

### Contact form behavior

The form currently operates as a frontend-only demo.

Submission is intercepted with `preventDefault()` and transitions to a success state without making a network request.

The success state explicitly communicates that a real contact service can be connected when backend functionality is introduced.

### Location handling

No real-world restaurant address or map location was fabricated.

The Visit Us section is intentionally architecture-ready and uses a location placeholder until actual business information is available.

### Verification

* `npm run build` passed successfully.
* Contact route renders successfully.
* Form validation was implemented.
* Submission state was implemented.
* Responsive styling was implemented.
* Theme-aware styling was implemented.

### Architecture decision

The Contact page remains frontend-only for the current MVP.

A future backend integration can replace the simulated submission while preserving the existing UI and form structure.

### Workflow completed

**Plan → Implement → Test → Verify → Document → Continue**
