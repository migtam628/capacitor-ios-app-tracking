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
    value,
  }: {
    value: string;
  }): Promise<{ value: string; status: string }> {
    return { value: value, status: status };
  }

  async requestPermission({
    value,
  }: {
    value: string;
  }): Promise<{ value: string; status: string }> {
    return { value: value, status: status };
  }
}

const IOSAppTracking = new IOSAppTrackingWeb();

export { IOSAppTracking };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(IOSAppTracking);
