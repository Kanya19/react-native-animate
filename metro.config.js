/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig, mergeConfig} = require('metro-config')
module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig()
  let config1 = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'scss', 'sass'],
    },
  }
  let config2 = {
    transformer: {
      babelTransformerPath: require.resolve('./transformer'), // add here the transformer.js
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  }

  // return config1
  return config2
})()
