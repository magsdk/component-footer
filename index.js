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

/* eslint max-statements: 0 */
function Footer ( config ) {
    var currentTab = 0,
        self = this;

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

    this.$table = this.$node.appendChild(document.createElement('table'));

    this.$table.insertRow();
    this.$table.rows[0].insertCell(-1);
    this.$left = this.$table.rows[0].cells[0].appendChild(document.createElement('div'));
    this.$left.className = 'theme-icon';

    this.$table.rows[0].insertCell(-1);
    this.$table.rows[0].cells[1].className = 'central';


    this.tabs[currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.className = 'wrapper hidden';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';

    ++currentTab;
    this.tabs[currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.className = 'wrapper hidden';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';

    ++currentTab;
    this.tabs[currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.className = 'wrapper hidden';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';

    ++currentTab;
    this.tabs[currentTab].$body = this.$table.rows[0].cells[1].appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.className = 'wrapper hidden';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';
    this.tabs[currentTab].$body.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.className = 'button';
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.appendChild(document.createElement('div'));
    this.tabs[currentTab].$body.lastChild.lastChild.className = 'title';

    this.$table.rows[0].insertCell(-1);
    this.$right = this.$table.rows[0].cells[2].appendChild(document.createElement('div'));
    this.$right.className = 'theme-icon';

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
    var index, $tab, $tabChildren;

    config = config || {};

    if ( DEVELOP ) {
        if ( config.middle && config.middle.length > 4 ) {
            throw new Error(__filename + ': only 4 buttons allowed in footer');
        }
        for ( index = 0; index < config.middle.length; index++ ) {
            if ( typeof config.middle[index].action !== 'function' ) {
                throw new Error(__filename + ': action must be a function');
            }
            ++index;
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
        for ( index = 0; index < config.middle.length; index++ ) {
            $tab.codes[config.middle[index].code] = {action: config.middle[index].action};
            if ( config.middle[index].disabled ) {
                $tab.$body.children[index].classList.add('disabled');
            } else {
                $tab.$body.children[index].classList.remove('disabled');
                $tab.$body.children[index].onclick = config.middle[index].action;
            }
            $tabChildren = $tab.$body.children[index].children; // shortcut
            $tabChildren[0].className = 'iconImg ' +
                (config.middle[index].className || ('theme-icon ' + (classes[config.middle[index].code] || 'theme-icon-warning')));

            $tabChildren[1].innerText = config.middle[index].title || '';
        }
        $tab.$body.classList.remove('hidden');
    }
};


// public
module.exports = Footer;
