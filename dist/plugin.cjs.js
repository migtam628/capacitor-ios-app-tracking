'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppTrackingTransparency = core.registerPlugin('AppTrackingTransparency', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.IOSAppTrackingWeb()),
});

class IOSAppTrackingWeb extends core.WebPlugin {
    constructor() {
        super({
            name: "IOSAppTracking",
            platforms: ["web"],
        });
    }
    async getTrackingStatus() {
        return { code: '200', status: 'authorized' };
    }
    async requestPermission() {
        return { code: '200', status: 'authorized' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IOSAppTrackingWeb: IOSAppTrackingWeb
});

exports.AppTrackingTransparency = AppTrackingTransparency;
//# sourceMappingURL=plugin.cjs.js.map
