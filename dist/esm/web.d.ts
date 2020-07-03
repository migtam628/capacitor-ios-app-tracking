import { WebPlugin } from "@capacitor/core";
import { IOSAppTrackingPlugin } from "./definitions";
export declare class IOSAppTrackingWeb extends WebPlugin implements IOSAppTrackingPlugin {
    constructor();
    getTrackingStatus({ tracking, }: {
        tracking: string;
    }): Promise<{
        value: string;
        status: string;
    }>;
    requestPermission(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const IOSAppTracking: IOSAppTrackingWeb;
export { IOSAppTracking };
