/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('mag-eslint'),

    rules: {
        // component has quite a lot of checks for incorrect params
        complexity: 0
    },

    globals: {
        TARGET: false
    }
};
