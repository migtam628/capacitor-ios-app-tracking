import { WebPlugin } from "@capacitor/core";
import type { IOSAppTrackingPlugin, IOSAppTrackingResponse, IOSAppTrackingStatus } from "./definitions";
export declare class IOSAppTrackingWeb extends WebPlugin implements IOSAppTrackingPlugin {
    constructor();
    IOSAppTrackingStatus: IOSAppTrackingStatus;
    getTrackingStatus(): Promise<IOSAppTrackingResponse>;
    requestPermission(): Promise<IOSAppTrackingResponse>;
}
