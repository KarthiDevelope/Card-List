# Card List App

A React application that displays a scrollable list of 1000 cards with a "Scroll to Top" button.

## Features

- Renders 1000 cards in a responsive grid
- Smooth scroll to top functionality
- Button appears after scrolling 300px down
- Unit tests for key components

## Setup

1. Creating a New Project with this command: npx create-react-app card-list --template typescript
2. it will Autiomatically installs All dependency with node modules
3. Run the app: `npm start`
4. Run tests: `npm run test`

## Implementation Details

### Card List
- Used React useState to generate 1000 card items
- Implemented a responsive grid layout with CSS Grid
- Each card displays a title and description

### Scroll Behavior
- Added scroll event listener to track scroll position
- ScrollToTopButton appears conditionally based on scroll position
- Implemented smooth scrolling with `window.scrollTo`

### Testing
- Used Jest and React Testing Library for unit tests
- Tested card rendering, button visibility, and click behavior