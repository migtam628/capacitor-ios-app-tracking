# iOS-Capacitor-App-Tracking

### Adds App Tracking Transparency for iOS 14

<br/>

<!-- Badges -->
<a href="https://npmjs.com/package/capacitor-ios-app-tracking">
  <img src="https://badgen.net/npm/v/capacitor-ios-app-tracking">
</a>
<a href="https://npmjs.com/package/capacitor-ios-app-tracking">
  <img src="https://badgen.net/npm/dt/capacitor-ios-app-tracking">
</a>
<a href="https://npmjs.com/package/capacitor-ios-app-tracking">
  <img src="https://badgen.net/npm/license/capacitor-ios-app-tracking">
</a>

## Release Note:

### v1.0.5rc1
- [README updated]

### v1.0.4
- Bug fixes.

### v1.0.3
- Bug fixes.

### v1.0.2

- Added Capacitor 3.0 Support.

### v0.1.1

- iOS 14 and iOS 15 App Tracking Transparency.

## Supported Platform:

- [x] iOS
- [ ] Android
- [ ] Web

## Supported methods

| Name              | Returns       | Type                              |
| :---------------- | ------------- | --------------------------------- |
| getTrackingStatus | **`Promise`** | <code>IOSAppTrackingStatus</code> |
| requestPermission | **`Promise`** | <code>IOSAppTrackingStatus</code> |

<br/>

## Install

```bash
npm install capacitor-ios-app-tracking
npx cap sync
```

<br/>
<br/>


## Info.plist
##### Add this
```xml
<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
```

## API Usage
<docgen-index>

- [`getTrackingStatus() => Promise<IOSAppTrackingStatus>)`](#getTrackingStatus)
- [`requestPermission() => Promise<IOSAppTrackingStatus>)`](#requestPermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->
<br/>
  
### getTrackingStatus() => Promise<IOSAppTrackingStatus>
  
```typescript
import { AppTrackingTransparency } from "capacitor-ios-app-tracking";

useEffect(() => {
  AppTrackingTransparency.getTrackingStatus().then((status) => {
    console.log(status);
  });
}, []);


```
  
### requestPermission() => Promise<IOSAppTrackingStatus>

```typescript  
import { AppTrackingTransparency } from "capacitor-ios-app-tracking";

useEffect(() => {
  AppTrackingTransparency.requestPermission().then((status) => {
    console.log(status);
  });
}, []);
```
  
<br/>

- ### interface IOSAppTrackingPlugin

```typescript
export interface IOSAppTrackingPlugin {
  getTrackingStatus(): Promise<IOSAppTrackingResponse>;
  requestPermission(): Promise<IOSAppTrackingResponse>;
}
```

<br/>
<br/>

- ### interface IOSAppTrackingResponse

```typescript
interface IOSAppTrackingResponse {
  code: string;
  status: IOSAppTrackingStatus;
}
```

<br/>
<br/>

- ### type IOSAppTrackingStatus

```typescript
type IOSAppTrackingStatus =
  | 'authorized'
  | 'denied'
  | 'unrequested'
  | 'restricted';
```

---

</docgen-api>
