import {
  clearProductsIOS,
  getPurchaseHistory,
  getSubscriptions,
  initConnection,
  requestSubscription,
  clearTransactionIOS,
  purchaseUpdatedListener,
  purchaseErrorListener,
} from 'react-native-iap'
import {Platform} from 'react-native'

let purchaseUpdateSubscription
let purchaseErrorSubscription
const historyMap = {}

const _initIAP = async (skuId) => {
  await clearProductsIOS()
  await clearTransactionIOS()
  const itemSubs = Platform.select({
    default: [skuId],
  })
  try {
    const result = await initConnection()
    if (result === false) {
      // Alert.alert(ENV.language["couldn't get in-app-purchase information"])
      return
    }
  } catch (err) {
    console.log('initConnection', err)
    console.error(err.code, err.message)
    // Alert.alert(ENV.language['fail to get in-app-purchase information'])
  }

  console.log('getPurchaseHistory', await getPurchaseHistory())
  const subscriptions = await getSubscriptions({skus: itemSubs})
  const req = await requestSubscription({sku: skuId})
  console.log('subscriptions', subscriptions)
  console.log('await requestSubscription({sku: skuId})', req)
}
const setApplePay = () => {
  if (purchaseUpdateSubscription) {
    purchaseUpdateSubscription.remove()
  }
  if (purchaseErrorSubscription) {
    purchaseErrorSubscription.remove()
  }
  return new Promise((resolve, reject) => {
    purchaseUpdateSubscription = purchaseUpdatedListener((purchase) => {
      const {transactionId} = purchase
      if (!historyMap[transactionId]) {
        console.log('purchase', purchase)
        resolve(purchase)
        historyMap[transactionId] = transactionId
      }
      //
    })
    purchaseErrorSubscription = purchaseErrorListener((error) => {
      console.log('error', error)
      reject()
      //
    })
  })
}
export const clearListen = () => {
  if (purchaseUpdateSubscription) {
    purchaseUpdateSubscription.remove()
  }
  if (purchaseErrorSubscription) {
    purchaseErrorSubscription.remove()
  }
}
export const handleApplePay = async ({skuId}) => {
  await _initIAP(skuId)
  return setApplePay()
}
