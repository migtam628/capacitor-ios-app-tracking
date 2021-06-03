import "capacitor-udp"
import { WebPlugin } from "@capacitor/core";
import type { IOSAppTrackingPlugin, IOSAppTrackingResponse, IOSAppTrackingStatus } from "./definitions";

export class IOSAppTrackingWeb extends WebPlugin
  implements IOSAppTrackingPlugin {
  constructor() {
    super({
      name: "IOSAppTracking",
      platforms: ["web"],
    });
  }
  IOSAppTrackingStatus: IOSAppTrackingStatus
  async getTrackingStatus(): Promise<IOSAppTrackingResponse> {
    return { code: '200', status: 'authorized' };
  }

  async requestPermission(): Promise<IOSAppTrackingResponse> {
    return { code: '200', status: 'authorized' };
  }
}


