
# @and-cru/use-foreground
[![package version](https://img.shields.io/npm/v/@and-cru/use-foreground.svg?style=flat-square)](https://npmjs.org/package/@and-cru/use-foreground)
[![package downloads](https://img.shields.io/npm/dm/@and-cru/use-foreground.svg?style=flat-square)](https://npmjs.org/package/@and-cru/use-foreground)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@and-cru/use-foreground.svg?style=flat-square)](https://npmjs.org/package/@and-cru/use-foreground)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> React Native hook to call handler function when app is in foreground

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
import useForeground from '@and-cru/use-foreground'

export const Example = () => {
  useForeground(() => {
    console.log('refreshing state...')
  })

  return null
}

```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @and-cru/use-foreground
$ # OR
$ yarn add @and-cru/use-foreground
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    