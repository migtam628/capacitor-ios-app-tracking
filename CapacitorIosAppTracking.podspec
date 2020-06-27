
  Pod::Spec.new do |s|
    s.name = 'CapacitorIosAppTracking'
    s.version = '0.0.6'
    s.summary = 'App AD Tracking for iOS 14.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/migtam628/capacitor-ios-app-tracking.git'
    s.author = 'Mig Tam Rod'
    s.source = { :git => 'https://github.com/migtam628/capacitor-ios-app-tracking.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end