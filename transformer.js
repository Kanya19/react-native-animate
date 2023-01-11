const obfuscatingTransformer = require('@quinaryio/react-native-obfuscating-transformer')
const filter = (filename) => {
  return filename.startsWith('src')
}
module.exports = obfuscatingTransformer({
  obfuscatorOptions: {
    compact: true,
    // 把正常代码每行，全部都放到switch控制流当中执行，会导致变慢1.5倍，所以不要设置！！【这个要是开了，APP基本卡的要死】
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 0.75,
    // 注入死代码
    deadCodeInjection: true,
    // 注入死代码百分比
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    debugProtectionInterval: false,
    // 禁止console输出
    disableConsoleOutput: true,
    // 变量名称生成器 十六进制 hexadecimal: _0xabc123; 简短字母 mangled: a、b、c
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    // 将数字都转成表达式，比如 2，会改为 1+1
    numbersToExpressions: true,
    renameGlobals: false,
    // 启动这个，如果代码规格化，则无法使用。可以防止对规格化代码后查看
    selfDefending: true,
    simplify: true,
    ignoreRequireImports: true,
    // 字符串拆分，比如 hello，会改为 'he' + 'llo'
    splitStrings: true,
    splitStringsChunkLength: 9,

    stringArray: true,
    stringArrayCallsTransform: false,
    stringArrayEncoding: [],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    // stringArray包裹类型 variable 简单一点， function 通过闭包生成并返回，会复杂很多，不要用。
    stringArrayWrappersType: 'variable',
    stringArrayThreshold: 0.75,

    // 每个对象中的key是否混淆
    transformObjectKeys: true,

    // 将字符转成unicode，会导致代码数量变大，不要用
    unicodeEscapeSequence: false,

    // 随机种子，建议和splitStringsChunkLength的长度一样
    seed: 'tww12tww134',
  },
  upstreamTransformer: require('metro-react-native-babel-transformer'),
  emitObfuscatedFiles: false,
  // 开发模式下启用混淆 false 表示不启用。保险起见，如果打包发布时，应该改成true，以免出意外。
  enableInDevelopment: false,
  filter: filter,
  trace: true,
})
