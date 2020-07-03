declare module "@capacitor/core" {
  interface PluginRegistry {
    IOSAppTracking: IOSAppTrackingPlugin;
  }
}

export interface IOSAppTrackingPlugin {
  getTrackingStatus(options: {
    value: string;
  }): Promise<{ value: string; status: string }>;
  requestPermission(options: {
    value: string;
  }): Promise<{ value: string; status: string }>;
}
