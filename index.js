/**
 * @license The MIT License (MIT)
 * @copyright Dmitry Fedotov <bas.jsdev@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('stb-component'),
    keys      = require('stb-keys'),
    classes   = {};


// initialize classes
classes[keys.f1] = 'theme-icon-rc-f1';
classes[keys.f2] = 'theme-icon-rc-f2';
classes[keys.f3] = 'theme-icon-rc-f3';
classes[keys.f4] = 'theme-icon-rc-f4';
classes[keys.menu] = 'theme-icon-rc-menu';
classes[keys.ok] = 'theme-icon-rc-ok';
classes[keys.info] = 'theme-icon-rc-info';
classes[keys.playPause] = 'theme-icon-rc-play-pause';
classes[keys.back] = 'theme-icon-rc-back';
classes[keys.exit] = 'theme-icon-rc-home';
classes[keys.keyboard] = 'theme-icon-rc-vk';
classes[keys.refresh] = 'theme-icon-rc-refresh';
classes[keys.frame] = 'theme-icon-rc-aspect';

/**
 * Footer.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object}  config={} init parameters
 * @param {Object}  config.parent parent page
 * @param {boolean} [config.visible] visibility flag
 * @param {Object}  [config.data] footer buttons config
 * @param {Object}  [config.data.left] left button config
 * @param {Object}  [config.data.middle] middle buttons config
 * @param {Object}  [config.data.right] right button config
 * @param {number}  [config.data.middle.code] button key code
 * @param {Object}  [config.data.middle.title] button title
 * @param {Object}  [config.data.middle.action] button press (click) action
 * @param {Object}  [config.data.label] button config (for remote control with long press)
 * @param {number}  [config.data.label.code] button key code
 * @param {Object}  [config.data.label.title] button title
 * @param {Object}  [config.data.label.action] button press (click) action
 *
 * @example
 * page.footer = new Footer({
 *     parent: page,
 *     data: {
 *         left: {
 *             code: keys.menu, action: function () {}
 *         },
 *         middle: [
 *             {code: 55, action: function () {}},
 *             {code: keys.f1, title: 'stop', action: function () {}},
 *             {code: 9000, className: 'customIcon', title: 'start', action: function () {}},
 *             {code: keys.f4, title: 'end', action: function () {}}
 *         ],
 *         right: {
 *             code: 65, action: function () {}
 *         },
 *         label: {
 *             code: keys.menu, title: 'Hold OK button to open the task options', action: function () {}
 *         }
 *     }
 * });
 */

/* eslint max-statements: 0 */
function Footer ( config ) {
    var currentTab = 0,
        self       = this,
        $body;

    // sanitize
    config = config || {};
    // can't accept focus
    config.focusable = false;
    // hide by default
    config.visible = config.visible || false;
    // create centered div
    config.$body = document.createElement('div');
    config.$body.className = 'body';

    // parent constructor call
    Component.call(this, config);

    this.tabs = [
        {codes: {}},
        {codes: {}},
        {codes: {}},
        {codes: {}}
    ];

    this.tab = 0;

    this.$table = this.$node.appendChild(document.createElement('table'));
    this.$table.insertRow();
    this.$table.rows[0].insertCell(-1);

    if ( PLATFORM !== 'ANDROID-STB' ) {
        this.$table.rows[0].insertCell(-1);
        this.$table.rows[0].insertCell(-1);

        this.$left = this.$table.rows[0].cells[0].appendChild(document.createElement('div'));
        this.$left.className = 'theme-icon';

        this.$table.rows[0].cells[1].className = 'central';
        $body = this.tabs[currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
    } else {
        this.$table.rows[0].cells[0].className = 'central';
        $body = this.tabs[currentTab].$body = this.$table.rows[0].cells[0].appendChild(document.createElement('div'));
    }

    $body.className = 'wrapper hidden';
    $body.appendChild(document.createElement('div'));
    $body.lastChild.className = 'button';
    $body.lastChild.appendChild(document.createElement('div'));
    $body.lastChild.appendChild(document.createElement('div'));
    $body.lastChild.lastChild.className = 'title';

    if ( PLATFORM !== 'ANDROID-STB' ) {
        $body = this.tabs[++currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
        $body.className = 'wrapper hidden';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';

        $body = this.tabs[++currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
        $body.className = 'wrapper hidden';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';

        $body = this.tabs[++currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
        $body.className = 'wrapper hidden';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';
        $body.appendChild(document.createElement('div'));
        $body.lastChild.className = 'button';
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.appendChild(document.createElement('div'));
        $body.lastChild.lastChild.className = 'title';


        this.$right = this.$table.rows[0].cells[2].appendChild(document.createElement('div'));
        this.$right.className = 'theme-icon';
    }

    this.init(config.data);

    this.parent.addListener('keydown', function ( event ) {
        var currTab = self.tabs[self.tab];

        if ( self.visible ) {
            if ( currTab.codes[event.code] && typeof currTab.codes[event.code].action === 'function' ) {
                currTab.codes[event.code].action();
            }
        }
    });
}


// inheritance
Footer.prototype = Object.create(Component.prototype);
Footer.prototype.constructor = Footer;

// set component name
Footer.prototype.name = 'mag-component-footer';


if ( PLATFORM === 'ANDROID-STB' ) {
    /**
     * Redefine buttons for android-stb platform
     *
     * @param {Object} [config] footer config
     * @param {Object} [config.label] button config
     * @param {number} [config.label.code] button key code
     * @param {Object} [config.label.title] button title
     * @param {Object} [config.label.action] button press (click) action
     *
     * initLongPressMode({
     *     label: {code: keys.menu, title: 'Hold OK button to open the task options', action: function () {}}
     * });
     *
     */
    Footer.prototype.init = function ( config ) {
        var $tab, $tabChildren;

        config = config || {};

        // current tab shortcut
        $tab = this.tabs[0];
        // reset
        $tab.codes = {};
        $tab.$body.classList.add('hidden');

        if ( config.label && typeof config.label.action === 'function' ) {
            // label button
            $tab.codes[config.label.code] = {action: config.label.action};
            $tab.$body.children[0].onclick = function () {
                if ( typeof config.label.action === 'function' ) {
                    config.label.action();
                }
            };
            // shortcut
            $tabChildren = $tab.$body.children[0].children;
            $tabChildren[0].className = '';
            $tabChildren[1].innerText = config.label.title || '';

            $tab.$body.classList.remove('hidden');
        }
    };
} else {
    /**
     * Redefine buttons
     *
     * @param {Object} [config] footer buttons config
     * @param {Object} [config.left] left button config
     * @param {number} [config.left.code] left button key code
     * @param {boolean} [config.left.disabled] left button is disabled
     * @param {Object} [config.left.action] left button press (click) action
     * @param {Object} [config.middle] middle buttons config
     * @param {Object} [config.right] right button config
     * @param {number} [config.right.code] right button key code
     * @param {boolean} [config.right.disabled] right button is disabled
     * @param {Object} [config.right.action] right button press (click) action
     * @param {number} [config.middle.code] button key code
     * @param {Object} [config.middle.title] button title
     * @param {boolean} [config.middle.disabled] button is disabled
     * @param {Object} [config.middle.action] button press (click) action
     * @param {Object} [config.label] button config
     * @param {number} [config.label.code] button key code
     * @param {Object} [config.label.title] button title
     * @param {Object} [config.label.action] button press (click) action
     *
     * page.Footer.init({
     *     left: {
     *         code: keys.menu, action: function () {}
     *     },
     *     middle: [
     *         {code: 55, action: function () {}},
     *         {code: keys.f1, title: 'stop', action: function () {}},
     *         {code: 9000, className: 'customIcon', title: 'start', action: function () {}},
     *         {code: keys.f4, title: 'end', disabled: true}
     *     ],
     *     right: {
     *         code: 65, action: function () {}
     *     }
     * });
     *
     */
    Footer.prototype.init = function ( config ) {
        var index, $tab, $tabChildren;

        config = config || {};

        if ( DEVELOP ) {
            if ( config.middle && config.middle.length > 4 ) {
                throw new Error(__filename + ': only 4 buttons allowed in footer');
            }
            if ( config.middle && Array.isArray(config.middle) ) {
                for ( index = 0; index < config.middle.length; index++ ) {
                    if ( typeof config.middle[index].action !== 'function' && !config.middle[index].disabled ) {
                        throw new Error(__filename + ': action must be a function');
                    }
                    ++index;
                }
            }
            if ( config.left && typeof config.left.action !== 'function' && !config.left.disabled ) {
                throw new Error(__filename + ': action must be a function');
            }
            if ( config.right && typeof config.right.action !== 'function' && !config.right.disabled ) {
                throw new Error(__filename + ': action must be a function');
            }
        }

        // hide old tab
        this.tabs[this.tab].$body.classList.add('hidden');
        this.tab = config.middle && config.middle.length ? config.middle.length - 1 : 0;
        // current tab shortcut
        $tab = this.tabs[this.tab];
        // reset all actions
        $tab.codes = {};

        // left button
        if ( config.left ) {
            this.$left.className = config.left.className || ('theme-icon ' + (classes[config.left.code] || 'theme-icon-warning'));
            if ( config.left.disabled ) {
                this.$left.classList.add('disabled');
            } else {
                $tab.codes[config.left.code] = {action: config.left.action};
                this.$left.style.visibility = 'inherit';
                this.$left.onclick = function () {
                    if ( typeof config.left.action === 'function' ) {
                        config.left.action();
                    }
                };
            }
        } else if ( this.$left.style.visibility !== 'hidden' ) {
            this.$left.style.visibility = 'hidden';
        }

        // right button
        if ( config.right ) {
            this.$right.className = config.right.className || ('theme-icon ' + (classes[config.right.code] || 'theme-icon-warning'));
            if ( config.right.disabled ) {
                this.$right.classList.add('disabled');
            } else {
                $tab.codes[config.right.code] = {action: config.right.action};
                this.$right.style.visibility = 'inherit';
                this.$right.onclick = function () {
                    if ( typeof config.right.action === 'function' ) {
                        config.right.action();
                    }
                };
            }
        } else if ( this.$right.style.visibility !== 'hidden' ) {
            this.$right.style.visibility = 'hidden';
        }

        function addClick ( ind ) {
            return function () {
                if ( typeof config.middle[ind].action === 'function' ) {
                    config.middle[ind].action();
                }
            };
        }

        // middle buttons
        if ( config.middle && config.middle.length ) {
            for ( index = 0; index < config.middle.length; index++ ) {
                $tab.codes[config.middle[index].code] = {action: config.middle[index].action};
                if ( config.middle[index].disabled ) {
                    $tab.$body.children[index].classList.add('disabled');
                } else {
                    $tab.$body.children[index].classList.remove('disabled');
                    $tab.$body.children[index].onclick = addClick(index);
                }
                // shortcut
                $tabChildren = $tab.$body.children[index].children;
                $tabChildren[0].className = 'iconImg ' +
                    (config.middle[index].className || ('theme-icon ' + (classes[config.middle[index].code] || 'theme-icon-warning')));

                $tabChildren[1].innerText = config.middle[index].title || '';
            }
            $tab.$body.classList.remove('hidden');
        }
    };
}


// public
module.exports = Footer;
