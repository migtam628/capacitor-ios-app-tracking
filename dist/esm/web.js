import "capacitor-udp";
import { WebPlugin } from "@capacitor/core";
export class IOSAppTrackingWeb extends WebPlugin {
    constructor() {
        super({
            name: "IOSAppTracking",
            platforms: ["web"],
        });
    }
    async getTrackingStatus() {
        return { code: '200', status: 'authorized' };
    }
    async requestPermission() {
        return { code: '200', status: 'authorized' };
    }
}
//# sourceMappingURL=web.js.map