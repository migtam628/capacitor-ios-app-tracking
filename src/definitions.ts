declare module "@capacitor/core" {
  interface PluginRegistry {
    IOSAppTracking: IOSAppTrackingPlugin;
  }
}

export interface IOSAppTrackingPlugin {
  getTrackingStatus(options: { tracking: string }): Promise<{value: string}>;
  requestPermission(options: { value: string }): Promise<{value: string}>;
}
