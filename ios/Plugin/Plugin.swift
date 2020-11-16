import Foundation
import Capacitor
import AppTrackingTransparency
import AdSupport
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@available(iOS 14, *)
@objc(IOSAppTracking)
public class IOSAppTracking: CAPPlugin {

    @objc func getTrackingStatus(_ call: CAPPluginCall) {
        let advertising = ASIdentifierManager.init().advertisingIdentifier.uuidString
        let status : ATTrackingManager.AuthorizationStatus = ATTrackingManager.trackingAuthorizationStatus
        call.success([
            "value": advertising, "status": status.rawValue == 0 ? "unrequested" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
        ])

    }

    @objc func requestPermission(_ call: CAPPluginCall) {
        ATTrackingManager.requestTrackingAuthorization { (res) in
            let advertising = ASIdentifierManager.init().advertisingIdentifier.uuidString
            let status = res
            call.success([
                "value": advertising, "status": status.rawValue == 0 ? "unrequested" : status.rawValue == 1 ? "restricted" : status.rawValue == 2 ? "denied" : status.rawValue == 3 ? "authorized" : ""
            ])
        }

     }

}



