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

### v1.0.1
- Added Capacitor 3.0 Support.
### v0.1.1
- iOS 14 App Tracking Transparency.

## Supported Platform:
- [x] iOS
- [ ] Android
- [ ] Web


## Supported methods
| Name              |
| :---------------- |
| getTrackingStatus |
| requestPermission |  

<br/>


## Install

```bash
npm install capacitor-ios-app-tracking
npx cap sync
```
<br/>
<br/>

## API

<docgen-index>

- [`getTrackingStatus(...)`](#getTrackingStatus)
- [`requestPermission(...)`](#requestPermission)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->
<br/>
<br/>

### getTrackingStatus(...)

### requestPermission(...)

```typescript
getTrackingStatus() => Promise<>
requestPermission() => Promise<>
```


| Returns       | Type                            |
| ------------- | ------------------------------- |
| **`Promise`** | <code>{ value: string; }</code> |
| **`Promise`** | <code>{ value: string; }</code> |


<br/>
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
