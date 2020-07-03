import { WebPlugin } from "@capacitor/core";
import { IOSAppTrackingPlugin } from "./definitions";
export declare class IOSAppTrackingWeb extends WebPlugin implements IOSAppTrackingPlugin {
    constructor();
    getTrackingStatus({ value, }: {
        value: string;
    }): Promise<{
        value: string;
        status: string;
    }>;
    requestPermission({ value, }: {
        value: string;
    }): Promise<{
        value: string;
        status: string;
    }>;
}
declare const IOSAppTracking: IOSAppTrackingWeb;
export { IOSAppTracking };
