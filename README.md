## react-boilerplate

React Boilerplate with sGrid, Webpack and Hot Module Replacement configuration.

This is a simple React boilerplate with:

- [React Router](https://www.npmjs.com/package/react-router)
- [Stylus](https://www.npmjs.com/package/stylus)
- [sGrid - my own Flexbox grid for Stylus](http://stylusgrid.com)
- [Webpack](https://www.npmjs.com/package/webpack)
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
- [Jest](https://facebook.github.io/jest/)
- [axios](https://www.npmjs.com/package/axios)
- [PostCSS](https://github.com/postcss/postcss)
- [CSS Modules](https://github.com/css-modules/css-modules)

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

It uses [Jest](https://facebook.github.io/jest/) config. If you want to run tests put your test files in the `__tests__` folder and run `npm test`. (Jest needs Node in version at least 4).

### sGrid docs

- [stylusgrid.com](http://stylusgrid.com)

For now this is a basic React boilerplate. PR are welcomed.

### License

MIT

### Changelog

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
