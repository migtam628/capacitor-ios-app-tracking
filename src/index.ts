import { registerPlugin } from '@capacitor/core';

import type { IOSAppTrackingPlugin } from './definitions';

const AppTrackingTransparency = registerPlugin<IOSAppTrackingPlugin>(
    'AppTrackingTransparency',
    {
        web: () => import('./web').then(m => new m.IOSAppTrackingWeb()),
    },
);

export * from './definitions';
export { AppTrackingTransparency };