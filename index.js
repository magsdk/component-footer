/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('stb-component'),
    dom       = require('spa-dom'),
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
//classes[keys.channelNext] = 'theme-icon-next';
//classes[keys.channelPrev] = 'theme-icon-previous';
//classes[keys.volumeUp] = 'theme-icon-volumeUp';
//classes[keys.volumeDown] = 'theme-icon-volumeDown';
//classes[keys.set] = 'theme-icon-set';
//classes[keys.tv] = 'theme-icon-tv';
//classes[keys.app] = 'theme-icon-app';
//classes[keys.rewind] = 'theme-icon-rewind';
//classes[keys.forward] = 'theme-icon-forward';
//classes[keys.stop] = 'theme-icon-stop';
//classes[keys.power] = 'theme-icon-power';
//classes[keys.mute] = 'theme-icon-mute';

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
 *         }
 *     }
 * });
 */

function Footer ( config ) {
    var self;

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

    this.tabs = [{codes: {}}, {codes: {}}, {codes: {}}, {codes: {}}];

    this.tab = 0;

    this.$node.appendChild(dom.tag('table', {},
        dom.tag('tr', {},
            dom.tag('td', {},
                this.$left = dom.tag('div', {className: 'theme-icon'})
            ),
            dom.tag('td', {className: 'central'},
                this.tabs[0].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[1].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[2].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[3].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div'), dom.tag('div', {className: 'title'}))
                )
            ),
            dom.tag('td', {},
                this.$right = dom.tag('div', {className: 'theme-icon'})
            )
        )
    ));

    this.init(config.data);

    self = this;

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


/**
 * Redefine buttons
 *
 * @param {Object} [config] footer buttons config
 * @param {Object} [config.left] left button config
 * @param {Object} [config.middle] middle buttons config
 * @param {Object} [config.right] right button config
 * @param {number} [config.middle.code] button key code
 * @param {Object} [config.middle.title] button title
 * @param {Object} [config.middle.action] button press (click) action
 *
 * page.Footer.init({
 *     left: {
 *         code: keys.menu, action: function () {}
 *     },
 *     middle: [
 *         {code: 55, action: function () {}},
 *         {code: keys.f1, title: 'stop', action: function () {}},
 *         {code: 9000, className: 'customIcon', title: 'start', action: function () {}},
 *         {code: keys.f4, title: 'end', action: function () {}}
 *     ],
 *     right: {
 *         code: 65, action: function () {}
 *     }
 * });
 *
 */
Footer.prototype.init = function ( config ) {
    var i, $tab, $tabChildren;

    config = config || {};

    if ( DEVELOP ) {
        if ( config.middle && config.middle.length > 4 ) {
            throw new Error(__filename + ': only 4 buttons allowed in footer');
        }
    }

    this.tabs[this.tab].$body.classList.add('hidden'); // hide old tab
    this.tab = config.middle && config.middle.length ? config.middle.length - 1 : 0;
    $tab = this.tabs[this.tab]; // current tab shortcut
    $tab.codes = {}; // reset all actions

    // left button
    if ( config.left ) {
        $tab.codes[config.left.code] = {action: config.left.action};
        this.$left.className = config.left.className || ('theme-icon ' + (classes[config.left.code] || 'theme-icon-warning'));
        this.$left.style.visibility = 'inherit';
    } else if ( this.$left.style.visibility !== 'hidden' ) {
        this.$left.style.visibility = 'hidden';
    }

    // right button
    if ( config.right ) {
        $tab.codes[config.right.code] = {action: config.right.action};
        this.$right.className = config.right.className || ('theme-icon ' + (classes[config.right.code] || 'theme-icon-warning'));
        this.$right.style.visibility = 'inherit';
    } else if ( this.$right.style.visibility !== 'hidden' ) {
        this.$right.style.visibility = 'hidden';
    }

    // middle buttons
    if ( config.middle && config.middle.length ) {
        for ( i = 0; i < config.middle.length; i++ ) {
            $tab.codes[config.middle[i].code] = {action: config.middle[i].action};
            $tabChildren = $tab.$body.children[i].children; // shortcut
            $tabChildren[0].className = 'iconImg ' + (config.middle[i].className || ('theme-icon ' + (classes[config.middle[i].code] || 'theme-icon-warning')));
            $tabChildren[1].innerText = config.middle[i].title || '';
        }
        $tab.$body.classList.remove('hidden');
    }
};


// public
module.exports = Footer;
