# Story

Here I detail all the development process for this app, in case you'd like to know.

## Creating the app from scratch

After reading through all the README of the coding test, checking the Figma file and the Yelp API links, my first task is, of course, to create the app.

I’m required to set up React from scratch, without a boilerplate. I’m used to Create React App and it’s been years since I last set up Webpack from scratch, so I started by searching React’s website for guidance:

https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch

The website just recommends the same old setup: yarn, Babel and Webpack or Parcel. On NPM trends, I confirmed that Webpack is still far more popular than Parcel, so I’ll go with it. The most popular tool usually has more resources available i.e. answered questions, compatible plugins etc:

https://www.npmtrends.com/parcel-vs-webpack-vs-parcel-bundler

So I started digging into Webpack’s documentation as a refresher. I don’t want to just copy-paste an existing “React Webpack” configuration snippet. I want to actually understand the configuration and keep it to a minimum:

https://webpack.js.org/concepts/

I set up a little demo project to make sure I grasped the basics:

https://github.com/joaosouza1/webpack-refresher/blob/main/webpack.config.js

After the refresher, I started following this guide indicated on React’s website:

https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

I’m glad I set up that demo project first, to get used with Webpack error messages and not blame the tutorial on the first error I found. =) I noticed the tutorial is a little outdated so I had to adapt some settings to make it work. For example, Webpack’s devServer options have changed in newer versions and you don’t need to specify the Hot Module Replacement plugin. I also discovered that the React Hot Loader plugin has been deprecated in favor of React Fast Refresh. I had some trouble installing React Fast Refresh until I realized it was my mistake, putting the plugin in the wrong place. I shared my solution on this issue to help fellow developers who come across the same problem:

https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/518#issuecomment-964084108

Finally, I have Webpack working with JSX and fast refresh. This is my first git commit.

## TypeScript

I use TypeScript daily at work, but I need to enable it using Webpack. This how-to was quite handy:

https://webpack.js.org/guides/typescript/

Setting up TS was straightforward but I noticed something strange. If I throw an error on purpose, the Call Stack blames the wrong line of code:

```
Call Stack
 Counter
  superformula-frontend-test/./src/Counter.tsx:16:11
  // It shows "line 16" because it's looking at the bundled output.
  // In the source code, the "throw" command is actually on line 7.
```

To fix that, I activated Source Maps in tsconfig and Webpack. The line number on the overlay error page is still wrong, but in the browser console it's correct. It's enough for now. Fixing the overlay page can be a future enhancement, I'll skip it for now to save time.

## Testing

Before doing any coding, I wanted to setup the testing tools.

### Jest

Jest is the go-to test runner for React apps so that's what I'll be using. It provides "describe" and "it" blocks and you run it on the CLI. It didn't work on the first attempt, however. After installing Jest, when I ran `yarn run jest`, I got this error:

```
React Refresh Babel transform should only be enabled in development environment. Instead, the environment is: "test"
```

Indeed, it doesn't make sense to have hot reloading in tests, it's not necessary. It took me more than one hour to make sense of this error and I'm glad I learned something new. In the end, all I had to do was to change `.babelrc` to include the `react-refresh/babel` plugin only for the development environment. Additionally, to make Jest work with TypeScript, I included the `@babel/preset-typescript` plugin for the test environment alone.

### React Testing Library

The name says it all: React Testing Library is tailored for React and it includes handy utilities for rendering components to a virtual DOM and testing the generated HTML. I installed it and added a sample test just to make sure it works.

## React, at last

With the setup out of the way, it's time to clear the placeholder files I created and start coding.

### Presentational components

When implementing a React app, I like to start with presentational components. I take a bottom-up approach: I implement "child" components first, then move up to "parent" components. This way, each component is a small task to complete, and each one I finish is a functioning tested piece of the app. If I took the other way, starting with the top-level components, I'd always find myself "stuck" having yet to implement a number of child components under it, and that would be an exhausting task.

So I'll start with the Restaurant Card, specifically its child components, following the [Figma file's](https://www.figma.com/file/4MqQhKPsnKetTud9tm6kDY/Superformula-FE-test-264388d?node-id=0%3A304) naming:

- Image
- Headline
- Rating
- Meta
- Open Flag
- Primary CTA

#### TDD

I'm doing TDD, but I admit I'm not yet familiar with the tools (Jest and React Testing Library), since at my current job they use a different setup. So I'll keep a few links here for my own reference:

- React Testing Library queries: https://testing-library.com/docs/react-testing-library/cheatsheet
- jest-dom matchers: https://github.com/testing-library/jest-dom
- How to use React Testing Library Tutorial: https://www.robinwieruch.de/react-testing-library

#### Styled Components

I'm using the Styled Components library for CSS. Requirements for CSS are open-ended, so I just picked the first choice from the README's CSS tech stack. In the real world, we would have to consider more questions:

- Does the product have an existing CSS file? So let's just use it.
- Do I need to create a CSS file to be used in other apps? So SCSS or LESS would be a good choice, it's more manageable than plain CSS and can be compiled into one regular CSS file.
- Is this a "black box" component to be used inside other apps? So I should use either inline styles or cryptic class names to avoid conflicts. Styled Components or Emotion would be good for this case.
