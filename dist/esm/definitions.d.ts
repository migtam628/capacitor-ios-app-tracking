declare module "@capacitor/core" {
    interface PluginRegistry {
        IOSAppTracking: IOSAppTrackingPlugin;
    }
}
export interface IOSAppTrackingPlugin {
    getTrackingStatus(options: {
        value: string;
    }): Promise<{
        value: string;
        status: string;
    }>;
    requestPermission(options: {
        value: string;
    }): Promise<{
        value: string;
        status: string;
    }>;
}
export interface Response {
    value: string;
    status: Status;
}
export declare type Status = 'authorized' | 'denied' | 'unrequested' | 'restricted';
