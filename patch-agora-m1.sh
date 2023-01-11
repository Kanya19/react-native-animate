#!/bin/bash

sed -i "/EXCLUDED_ARCHS\[sdk=iphonesimulator\*\]/s/\"\"/arm64/g" ios/hipoapp.xcodeproj/project.pbxproj


addText="NativeEventEmitter"
AddCmd(){
#判断 file.sh 文件中是否存在该字符串
if ! grep "$addText" node_modules/@react-native-community/cameraroll/jest.setup.js  >/dev/null
then
#不存在，添加字符串
   echo "添加补丁"
   sed -i "19i jest\.mock\(\'react-native\/Libraries\/EventEmitter\/NativeEventEmitter\'\);" node_modules/@react-native-community/cameraroll/jest.setup.js
else
#存在，不做处理
   echo "无需要添加补丁"
fi
}

#执行该函数
AddCmd