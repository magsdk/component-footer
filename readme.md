Footer component
================

[![build status](https://img.shields.io/travis/magsdk/component-footer.svg?style=flat-square)](https://travis-ci.org/magsdk/component-footer)
[![npm version](https://img.shields.io/npm/v/mag-component-footer.svg?style=flat-square)](https://www.npmjs.com/package/mag-component-footer)
[![dependencies status](https://img.shields.io/david/magsdk/component-footer.svg?style=flat-square)](https://david-dm.org/magsdk/component-footer)
[![devDependencies status](https://img.shields.io/david/dev/magsdk/component-footer.svg?style=flat-square)](https://david-dm.org/magsdk/component-footer?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/magsdk)


Footer is a component to build user interface, an instance of [Component](https://github.com/stbsdk/component) module.


## Installation ##

```bash
npm install mag-component-footer
```


## Usage ##

Add the constructor to the scope:

```js
var Footer = require('mag-component-footer');
```

Create instance with custom config:

```js
var footer = new Footer({
    parent: page,
    data: {
        left: {
            code: keys.menu, action: function () {}
        },
        middle: [
            {
                code: 55,
                action: function () {}
            },
            {
                code: keys.f1,
                title: 'stop',
                action: function () {}
            },
            {
                code: 9000,
                className: 'customIcon',
                title: 'start',
                action: function () {}
            },
            {
                code: keys.f4,
                title: 'end',
                action: function () {}
            }
        ],
        right: {
            code: 65,
            action: function () {}
        }
    }
});
```

To change footer after creation:

```js
footer.init({
    left: {
        code: keys.menu,
        action: function () {}
    },
    middle: [
        {
            code: 55,
            action: function () {}
        },
        {
            code: keys.f1, 
            title: 'stop', 
            action: function () {}
        },
        {
            code: 9000,
            className: 'customIcon',
            title: 'start',
            action: function () {}
        },
        {
            code: keys.f4, 
            title: 'end', 
            disabled: true
        }
    ],
    right: {
        code: 65, action: function () {}
    }
});
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/magsdk/component-footer/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`mag-component-footer` is released under the [MIT License](license.md).
