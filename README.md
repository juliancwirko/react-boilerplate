## react-boilerplate

React Redux Boilerplate with sGrid, Webpack and Hot Module Replacement configuration.

This is a simple React boilerplate with:

- [Redux](http://redux.js.org/)
- [Webpack](https://www.npmjs.com/package/webpack)
- [React Router](https://www.npmjs.com/package/react-router)
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React CSS Modules](https://github.com/gajus/react-css-modules)
- [Stylus](https://www.npmjs.com/package/stylus)
- [sGrid - my own Flexbox grid for Stylus](http://stylusgrid.com)
- Testing with:
  - [Mocha](https://mochajs.org/)
  - [Enzyme](http://airbnb.io/enzyme/),
  - [Chai](http://chaijs.com/),
  - [Sinon](http://sinonjs.org/),
  - [JSDOM](https://github.com/tmpvar/jsdom) [when you want to use 'mount' from Enzyme],
  - You can even test CSS Modules

## Usage

```
$ git clone https://github.com/juliancwirko/react-boilerplate.git
$ cd react-boilerplate
$ npm install
$ npm start
```
...and go to: http://localhost:3000

More info and documentation soon. There will be also a tutorial in a blog post. Stay tuned.

## Prepare for production

If you are ready to prepare your production files. You can run `npm run build`. Webpack will bundle and save all needed files (.js, .css, img, .html) in the `public` folder.

## Tests and ESLint

It uses Mocha runner config. You can use Enzyme, Chai, Sinon and JSDOM too.
Configuration allows you to test components which uses CSS Modules.
If you want to run tests put your test files in the `__tests__` folder and run `npm test`. (it will run eslint too) or `npm run testonly`.
You'll find example tests in the `__tests__` folder.

### sGrid docs

- [stylusgrid.com](http://stylusgrid.com)

For now this is a basic React boilerplate. PR are welcomed.

### Also check out

- [React Alert UI component](https://github.com/juliancwirko/react-s-alert)
- [Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

Works in Node which supports Promises.

### License

MIT

### Changelog

- 0.8.0 Redux added; react-css-modules added; optimalization and adjustments
- 0.7.2 HtmlWebpackPlugin added
- 0.7.1 Stylus added [#7](https://github.com/juliancwirko/react-boilerplate/issues/7)
- 0.7.0 Jest removed; Mocha, Enzyme added; Update for React 15; Update for React Router 2
- 0.6.1 Small adjustments and updates
- 0.6.0 [CSS Modules](https://github.com/css-modules/css-modules) approach; PostCSS loader
- 0.5.1 file-loader/url-loader and dist build fix
- 0.5.0 Jest config added (testing); build task
- 0.4.2 sGrid update
- 0.4.1 Webpack, Babel updates
- 0.4.0 React, ReactRouter, Babel and other updates
- 0.3.1 sGrid update
- 0.3.0 React 0.14, React-Router 1.0.0-rc3, HMR config, different server config, other updates
- 0.2.1 sGrid and autoprefixer update
- 0.2.0 webpack-dev-server config and updates
- 0.1.0 es6 refactor, eslint added
- 0.0.1 init
