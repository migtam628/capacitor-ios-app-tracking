import { WebPlugin } from '@capacitor/core';
import { CapacitorIOSAppTrackingPlugin } from './definitions';

export class CapacitorIOSAppTrackingWeb extends WebPlugin implements CapacitorIOSAppTrackingPlugin {
  constructor() {
    super({
      name: 'CapacitorIOSAppTracking',
      platforms: ['web']
    });
  }

  async requestPermission(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorIOSAppTracking = new CapacitorIOSAppTrackingWeb();

export { CapacitorIOSAppTracking };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorIOSAppTracking);
