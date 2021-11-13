# Solution

Thank you for reviewing my solution! To run the app:

```
yarn install
yarn start
```

The `start` command will spin up:

- The development server
- The Yelp proxy
- Storybook
- Tests: 3 out of 18 will fail, didn't have time to fix them, sorry =(

You can open the app at `http://localhost:3000`. Storybook will open automatically on a new window.

You can also run individual commands, see `package.json`.

## Highlights

- I set up Webpack with Babel, TypeScript, SVG and CSS loaders. Babel will transpile JSX/TSX and modern JavaScript features, like arrow functions and async/await. In development, Babel will also use the React Refresh plugin so the app live-reloads.

- I used the [`swr`](http://swr.vercel.app) library for data fetching.

- For tests, I used Jest and React Testing Library. I added just a few tests as demonstation, since I'm not super familiar with these libraries and because my time is limited. For a highlight, check `RestaurantGridContainer.test.tsx`.

- To develop presentational components, I used the CDD approach (Component Driven Development) with Storybook.

- I followed the pages/containers/presentational approach wherever possible. Pages are the top-level components for each URL. Containers are components that perform data fetching and business logic. Presentational are components that simply take in props and render the markup for them.

- I added a few accessibility features like aria labels, but the app isn't keyboard-usable (especially filters), so it could be better.

- I implemented the detail page too, just click on "Learn more" under a restaurant card. It pre-fills the top of the page with data from the index page. It's also possible to visit the URL directly.

- There is one decision I intentionally did differently from the requirement. You asked to perform real time filtering on both client side data, as well as server side queries. I implemented a middle ground solution. I store the SWR cache for each request in the browser's local storage, so the endpoints the user has already visited will yield results even if the Yelp API is down. I did it like this for two reasons:

   1. It's easier to implement than Redux. Redux requires a store, reducers, selectors, etc. SWR is just a one-line hook.

   2. It's better user experience imho. When the user performs a query, it's better to display a loading UI or delay the UI update a little (React Suspense) than to flash a page with local results and replace it with API data half a second later. I didn't add Suspense, but it wouldn't be too hard to add it in this app.

- Read `STORY.md` for more detailed insights.

## Possible improvements

I wanted to deliver a perfect solution, but time wasn't on my side this week. There are many possible improvements for this app:

- Set up a 24-hour cache on the production proxy for Yelp API data

- Save SWR local cache periodically and replace local storage with IndexedDB for async writes and more storage

- Better loading and error UI

- Make the components more exactly match the mockup. It's close, but not yet perfect.

- Serve the HelveticaNeue Light font, since not all clients have it (copyright issues?)

- CSS theming with Styled Components to avoid repetition of colors, media queries etc

- Implement the mobile version (I made it minimally usable on mobile, but not according to design)

- Display restaurant alias instead of ID in the URL (but the Yelp API only accepts IDs on the detail endpoint, so I don't know how I'd do that)

- More tests and Storybook. I added a few for demonstration purposes, but then I didn’t add any more, I had to focus my limited time on the implementation.

- Split the Webpack config for development and production

- ESLint: lint, auto-format code, auto-sort imports

- Upon clicking on "Clear all", display just one page, clear the rest, to save on API hits.

- Hide the Load More button when there are no results.

- And probably more!

I'm looking forward to see your questions and comments =)

# Superformula Front-end Developer Coding Test

Be sure to read **all** of this document carefully, and follow the guidelines within.

## Context

Use React w/ TypeScript to implement the following mock-up. You will need to leverage an open API for restaurant data to fill in the details and functionality as described below. You are only required to complete the desktop views, unless otherwise instructed.

![Superformula-front-end-test-mockup](./mockup.png)

Use this Figma file to see button states, colors, and responsive design.  You should be sure to complete the test to mimic the design as seen.

> [Source Figma file](https://www.figma.com/file/4MqQhKPsnKetTud9tm6kDY/Superformula-FE-test-264388d?node-id=0%3A1)

## Requirements

### Yelp API

You can ask us and we will provide you a Yelp API Key to use for your PR.

> NOTE: Yelp's API does not allow CORS. To get around this, you will need to setup a local proxy with CORS support and proxy your requets to Yelp's endpoints.

### Page Structure

```
Main
  - Filter navigation
    - Open now (client side filter)
    - Price (client side filter)
    - Categories/Cuisines (server side search filter)
  - Section
    - Restaurant item
      - Image (use first item in `photos`)
      - Cuisine / Categories (use first item in `categories`)
      - Rating
      - Price range
      - Open / Closed
      - Restaurant name
      - Learn more (navigate to Detail View)
Detail View
  - Restaurant Name & Rating
  - Map (optional, if time allows)
  - Section
    - Review item
      - Image
      - Name
      - Rating
      - Text
```

### Functionality

- The filter navigation needs to be able to perform real time filtering on both client side data, as well as server side queries.
- Yelp's `/businesses/search` endpoint requires a `location`, please use `Las Vegas`
- `Categories` can be pre-filled from the [Categories endpoint](https://www.yelp.com/developers/documentation/v3/all_categories)
- The items should always show 4-6 items per row depending on viewport size. Use your own judgement for when to change per breakpoints.
- Please see the [Yelp documentation](https://www.yelp.com/developers/documentation/v3) for more details.

### Tech stack

- TypeScript oriented (JavaScipt can be used, but we strongly prefer TypeScript)
  - Use **React**
  - _Do not_ use any React boilerplate, such as Create React App
- Feel free to use a preprocessor, CSS-in-JS, or JSS tool but _do not_ use any pre-styled frameworks or libraries
  - The general rule of thumb is: you should write your own styling for your components, do not use "pre-made" tools and utilities
  - There are a few reasons we do this:
    - we care about pixel perfect implementation
    - we want to see your understanding of CSS and styling practices
  - USE:
    - Styled-Components
    - Emotion
    - SCSS
    - SASS
    - LESS
    - CSS
  - AVOID:
    - Tailwind
    - Bootstrap
    - Material UI
    - Semantic UI

### Bonus

- Make the application accessible
- Also create mobile version included in Figma comp
- Write clear **documentation** on how the app was designed and how to run the code
- Implement useful testing
- Provide components in [Storybook](https://storybook.js.org) (we use Storybook, buy any component display tool of your choice if fine!)
- Use Yelp's [Graph QL](https://www.yelp.com/developers/graphql/guides/intro) endpoint
- Write concise and clear commit messages
- Provide an online demo of the application
- Include subtle animations to focus attention
- Describe improvement opportunities when you conclude

## What We Care About

Use any libraries that you would normally use if this were a real production App. Be prepared to justify those choices.
Please note: _we care more about how you approach the problem than the end result. Code cleanliness and design
are more important than using the "right" library._

Here's what you should strive for:

- Good use of current TypeScript, HTML, CSS, and performance best practices
- Solid testing approach
- Extensible code
- Mobile support and accessibility
- Thorough explanation of decisions and tradeoffs

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. There is no deadline for this task unless otherwise noted to you directly.

> What if I have a question?

Just create a new issue in this repo and we will respond and get back to you quickly.
