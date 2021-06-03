var capacitorIOSAppTrackingPlugin = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
