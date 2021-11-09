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
