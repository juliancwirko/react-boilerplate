## React Boilerplate

React Redux Boilerplate with Webpack and Hot Module Replacement configuration. Without any front-end frameworks because this is usually switchable part of the whole stack. In the demo files there is also some code repetition, of course this is just becaus I don't wanted to provide more abstraction in the code.

This is a simple React boilerplate with:

- [Redux](http://redux.js.org/)
- [Webpack 2](https://www.npmjs.com/package/webpack)
- [React Router 4](https://www.npmjs.com/package/react-router)
- [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
- [PostCSS and Scss](https://github.com/postcss/postcss)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React CSS Modules](https://github.com/gajus/react-css-modules)

## Usage

```
$ git clone https://github.com/juliancwirko/react-boilerplate.git
$ cd react-boilerplate
$ npm install
$ npm start
```
...and go to: http://localhost:3000

## Prepare for production

If you are ready to prepare your production files. You can run `npm run build`. Webpack will bundle and save all needed files (.js, .css, img, .html) in the `public` folder.

## CSS and JavaScript linters

There is AirBnB JavaScript styleguide and ESLint configured. You can lint your project by running `npm run lint` or using editor plugins.

[TODO] Stylelint integration.

## Testing

[TODO] I plan to integrate Jest and other tools

## Storybook

[TODO] There will be Storybook on board too.

## Data layer

For now I use only standard [fetch](https://github.com/github/fetch) here. But I plan to use this boilerplan with [GraphQL/Apollo](http://dev.apollodata.com/) so I'll probably prepare another one, very similar to this one, but integrated with Apollo.

### License

MIT

### Changelog

- 1.0.0 total rewrite, updates etc.
