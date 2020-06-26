import { WebPlugin } from '@capacitor/core';
import { CapacitorIOSAppTrackingPlugin } from './definitions';
export declare class CapacitorIOSAppTrackingWeb extends WebPlugin implements CapacitorIOSAppTrackingPlugin {
    constructor();
    requestPermission(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const CapacitorIOSAppTracking: CapacitorIOSAppTrackingWeb;
export { CapacitorIOSAppTracking };
