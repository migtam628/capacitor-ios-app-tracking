declare module "@capacitor/core" {
    interface PluginRegistry {
        CapacitorIOSAppTracking: CapacitorIOSAppTrackingPlugin;
    }
}
export interface CapacitorIOSAppTrackingPlugin {
    requestPermission(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
