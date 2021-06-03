declare module "@capacitor/core" {
  interface PluginRegistry {
    IOSAppTracking: IOSAppTrackingPlugin;
  }
}

export interface IOSAppTrackingPlugin {
  getTrackingStatus(): Promise<IOSAppTrackingResponse>;
  requestPermission(): Promise<IOSAppTrackingResponse>;
}

export interface IOSAppTrackingResponse {
  code: string;
  status: IOSAppTrackingStatus;
}

export type IOSAppTrackingStatus = 'authorized' | 'denied' | 'unrequested' | 'restricted'