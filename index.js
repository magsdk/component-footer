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
classes[keys.f1] = 'theme-icon theme-icon-rc-f1';
classes[keys.f2] = 'theme-icon theme-icon-rc-f2';
classes[keys.f3] = 'theme-icon theme-icon-rc-f3';
classes[keys.f4] = 'theme-icon theme-icon-rc-f4';
classes[keys.menu] = 'theme-icon theme-icon-rc-menu';
classes[keys.ok] = 'theme-icon theme-icon-rc-ok';
classes[keys.info] = 'theme-icon theme-icon-rc-info';
classes[keys.playPause] = 'theme-icon theme-icon-rc-play-pause';
//classes[keys.back] = 'theme-icon theme-icon-rc-back';
//classes[keys.channelNext] = 'theme-icon theme-icon-next';
//classes[keys.channelPrev] = 'theme-icon theme-icon-previous';
//classes[keys.exit] = 'theme-icon theme-icon-rc-exit';
//classes[keys.volumeUp] = 'theme-icon theme-icon-volumeUp';
//classes[keys.volumeDown] = 'theme-icon theme-icon-volumeDown';
//classes[keys.refresh] = 'theme-icon theme-icon-refresh';
//classes[keys.frame] = 'theme-icon theme-icon-frame';
//classes[keys.phone] = 'theme-icon theme-icon-phone';
//classes[keys.set] = 'theme-icon theme-icon-set';
//classes[keys.tv] = 'theme-icon theme-icon-tv';
//classes[keys.app] = 'theme-icon theme-icon-app';
//classes[keys.rewind] = 'theme-icon theme-icon-rewind';
//classes[keys.forward] = 'theme-icon theme-icon-forward';
//classes[keys.audio] = 'theme-icon theme-icon-audio';
//classes[keys.standby] = 'theme-icon theme-icon-standby';
//classes[keys.keyboard] = 'theme-icon theme-icon-keyboard';
//classes[keys.stop] = 'theme-icon theme-icon-stop';
//classes[keys.power] = 'theme-icon theme-icon-power';
//classes[keys.record] = 'theme-icon theme-icon-record';
//classes[keys.mute] = 'theme-icon theme-icon-mute';

/**
 * Footer.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object}   config={} init parameters
 * @param {Object}   config.parent parent page
 * @param {boolean}  [config.visible] visibility flag
 * @param {Array}    config.data buttons config
 * @param {Object}   config.data.code button key code
 * @param {string}   [config.data.title] button title
 * @param {string}   [config.data.className] button className
 * @param {Function} [config.data.action] button press (click) action
 *
 * @example
 * page.footer = new Footer({
 *     parent: page,
 *     data: [
 *         {code: keys.menu, action: function () {}},
 *         {code: keys.f1, title: 'stop', action: function () {}},
 *         {code: 9000, className: 'customIcon', title: 'start', action: function () {}},
 *         {code: keys.f4, title: 'end', action: function () {}}
 *     ]
 * });
 * page.add(page.footer);
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

    this.tabs = [
        {$body: null, codes: {}}, {$body: null, codes: {}}, {$body: null, codes: {}}, {$body: null, codes: {}}
    ];

    this.tab = 0;

    this.$node.appendChild(dom.tag('table', {},
        dom.tag('tr', {},
            dom.tag('td', {},
                this.$menu = dom.tag('div', {className: 'theme-icon theme-icon-rc-menu'})
            ),
            dom.tag('td', {className: 'central'},
                this.tabs[0].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[1].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[2].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'}))
                ),
                this.tabs[3].$body = dom.tag('div', {className: 'wrapper hidden'},
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'})),
                    dom.tag('div', {className: 'button'}, dom.tag('div', {className: 'iconImg'}), dom.tag('div', {className: 'title'}))
                )
            ),
            dom.tag('td', {})
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
 * @param {Array} [config] buttons config
 * @param {Object} [config.type] f1 button config, if false button will be hidden
 * @param {Object} [config.title] f1 button title
 * @param {Object} [config.action] f1 button press (click) action
 *
 * @example
 * page.Footer.init([
 *     {code: keys.menu, action: function () {}},
 *     {code: keys.f1, title: 'stop', action: function () {}},
 *     {code: 9000, className: 'customIcon', title: 'start', action: function () {}},
 *     {code: keys.f4, title: 'end', action: function () {}}
 * ]);
 */
Footer.prototype.init = function ( config ) {
    var tab = 1,
        i;

    config = config || [];

    this.tabs[this.tab].$body.classList.add('hidden');
    this.$menu.style.visibility = 'hidden';

    for ( i = 0; i < config.length; i++ ) {
        if ( config[i].code === keys.menu ) {
            tab++;
            break;
        }
    }
    if ( DEVELOP ) {
        if ( config.length - tab > 3 ) { throw new Error(__filename + ': only 4 buttons allowed in footer'); }
    }
    this.tab = config.length - tab >= 0 ? config.length - tab : 0;
    this.tabs[this.tab].codes = {}; // reset actions
    tab = 0;

    for ( i = 0; i < config.length; i++ ) {
        this.tabs[this.tab].codes[config[i].code] = {action: config[i].action};
        if ( config[i].code === keys.menu ) { // menu button has only action
            this.$menu.style.visibility = 'inherit';
            continue;
        }
        this.tabs[this.tab].$body.children[tab].children[0].className = 'iconImg ' + (config[i].className || classes[config[i].code] || 'theme-icon theme-icon-warning');
        this.tabs[this.tab].$body.children[tab].children[1].innerText = config[i].title;
        tab++;
    }
    if ( tab ) { this.tabs[this.tab].$body.classList.remove('hidden'); }
};


// public
module.exports = Footer;
