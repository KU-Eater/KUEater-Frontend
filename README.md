# KUEater-Frontend

## Android App Development Prerequisites
* Android device w/ OS version 6+
* `Node.js` LTS version
* `yarn` 3+
* `Java Development Kit (JDK)` 17+
* `Android Studio` with following components,
    * [`NDK` r26b](https://github.com/android/ndk/releases/tag/r26b) (extract the installation at `Android Studio Install path/ndk/26.1.10909125`)

## App Building Instructions
> Refer from: *https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&buildEnv=local*
* Enable Developer Mode (tapping the build number in system settings until developer mode is unlocked.)
* Enable **USB Debugging** on your Android device.
* Plug the Android device to host machine using USB.
* Build and run using `yarn android`