import Foundation
import Capacitor
import AppTrackingTransparency

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CapacitorIOSAppTracking)
public class CapacitorIOSAppTracking: CAPPlugin {
    
    @objc func requestPermission(_ call: CAPPluginCall) {
       let status = ATTrackingManager.trackingAuthorizationStatus;
       var value;
       ATTrackingManager.requestTrackingAuthorization { (res) in
           value = res;
       }
        call.success([
            "value": value
        ])
     }

}

