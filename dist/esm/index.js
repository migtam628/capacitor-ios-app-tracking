import { registerPlugin } from '@capacitor/core';
const AppTrackingTransparency = registerPlugin('AppTrackingTransparency', {
    web: () => import('./web').then(m => new m.IOSAppTrackingWeb()),
});
export * from './definitions';
export { AppTrackingTransparency };
//# sourceMappingURL=index.js.map