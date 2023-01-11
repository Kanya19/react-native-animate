一、启动新ios项目时，需要先打包



一、打包安卓
```
./gradlew assembleRelease
```

1、ws在后台运行时会断开的问题
setTimout在app后台不会触发

2、react-native-background-timer 调试时引用报错
Invariant Violation: new NativeEventEmitter() requires a non-null argument

解决方案：全局搜索jest.setup.js 文件，添加
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
