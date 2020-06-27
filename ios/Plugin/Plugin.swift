import Foundation
import Capacitor
import AppTrackingTransparency

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@available(iOS 14, *)
@objc(IOSAppTracking)
public class IOSAppTracking: CAPPlugin {
    
    @objc func getTrackingStatus(_ call: CAPPluginCall) {
//        var tracking = call.getBool("tracking"
        let status : ATTrackingManager.AuthorizationStatus = ATTrackingManager.trackingAuthorizationStatus
        call.success([
            "value": status.rawValue == 0 ? "Not Asked" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
        ])
        
    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        var value: ATTrackingManager.AuthorizationStatus = ATTrackingManager.trackingAuthorizationStatus
        ATTrackingManager.requestTrackingAuthorization { (res) in
            value = res
        }
        call.success([
            "value": value.rawValue == 0 ? "Not Asked" : value.rawValue == 1 ? "restricted" : value.rawValue == 2 ? "denied" : value.rawValue == 3 ? "authorized" : ""
        ])
        
     }

}

