# Chops — UI Decisions

## Design Direction

Chops uses a modern, polished restaurant aesthetic.

The interface should feel:

- Premium
- Warm
- Appetizing
- Modern
- Clean
- Trustworthy
- Easy to navigate

The design is inspired by modern food-ordering UX patterns but does
not intentionally clone another restaurant or delivery application.

---

# Brand

## Primary Brand Color

Orange is the primary Chops brand color.

The orange brand identity must remain recognizable in both light and
dark themes.

---

# Typography

Typography uses the global design-token system.

Headings use the configured heading font.

Body content uses the configured body font.

Typography should prioritize:

- Clear hierarchy
- Readability
- Strong food/product presentation
- Responsive scaling

---

# Theme

Chops supports:

- Light theme
- Dark theme

Theme requirements:

- Persistent preference
- System preference on first visit
- No incorrect-theme flash during initial load
- Theme-aware surfaces
- Theme-aware borders
- Theme-aware text
- Theme-aware controls

---

# Navigation

## Desktop

Primary navigation is handled by the main navbar.

## Mobile

Mobile navigation uses a fixed bottom navigation bar.

The mobile navigation:

- Remains accessible
- Provides active route feedback
- Supports cart count
- Respects safe-area spacing
- Uses theme variables

---

# Food Cards

Food cards should prioritize:

1. Food image
2. Category
3. Rating
4. Dish name
5. Description
6. Price
7. Primary action

Cards use subtle hover/focus interactions rather than excessive
animation.

---

# Food Details

The Food Details page uses:

- Large food gallery
- Sticky ordering panel
- Clear food information
- Quantity controls
- Customization options
- Related dishes
- Frequently ordered together

The ordering panel must remain visually prominent without obscuring
the food content.

---

# Customization

Customization uses:

- Radio controls for mutually exclusive sizes
- Checkbox controls for optional add-ons
- Clear selected states
- Visible price differences
- Keyboard-accessible focus states

Customization should feel integrated into the ordering experience rather
than appearing as a separate modal.

---

# Interaction

Interactive transitions should generally remain within:

`200ms–300ms`

Avoid unnecessary animation.

Respect:

```css
@media (prefers-reduced-motion: reduce)