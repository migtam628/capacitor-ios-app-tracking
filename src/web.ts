import { WebPlugin } from "@capacitor/core";
import { IOSAppTrackingPlugin } from "./definitions";

export class IOSAppTrackingWeb extends WebPlugin
  implements IOSAppTrackingPlugin {
  constructor() {
    super({
      name: "IOSAppTracking",
      platforms: ["web"],
    });
  }

  async getTrackingStatus({
    tracking,
  }: {
    tracking: string;
  }): Promise<{ value: string }> {
    console.log("ECHO", tracking);
    return { value: tracking };
  }
  async requestPermission(options: {
    value: string;
  }): Promise<{ value: string }> {
    console.log("ECHO", options);
    return options;
  }
}

const IOSAppTracking = new IOSAppTrackingWeb();

export { IOSAppTracking };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(IOSAppTracking);
