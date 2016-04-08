## react-boilerplate

React Boilerplate with sGrid, Webpack and Hot Module Replacement configuration.

This is a simple React boilerplate with:

- [React Router](https://www.npmjs.com/package/react-router)
- [Stylus](https://www.npmjs.com/package/stylus)
- [sGrid - my own Flexbox grid for Stylus](http://stylusgrid.com)
- [Webpack](https://www.npmjs.com/package/webpack)
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
- [axios](https://www.npmjs.com/package/axios)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS Modules](https://github.com/css-modules/css-modules)
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

## Prepare Dist

If you are ready to prepare your production files. You can run `npm run dist`. Webpack will bundle and save the `.js` file in the `public` folder.

## Tests

It uses Mocha runner config. You can use Enzyme, Chai, Sinon and JSDOM too.
Configuration allows you to test components which uses CSS Modules.
If you want to run tests put your test files in the `__tests__` folder and run `npm test`.
You'll find example tests in the `__tests__` folder.

### sGrid docs

- [stylusgrid.com](http://stylusgrid.com)

For now this is a basic React boilerplate. PR are welcomed.

### Also check out

- [React Alert UI component](https://github.com/juliancwirko/react-s-alert)
- [Boilerplate for creating React Npm packages with ES2015](https://github.com/juliancwirko/react-npm-boilerplate)

### License

MIT

### Changelog

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
