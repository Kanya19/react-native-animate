import {Platform, TouchableOpacity} from 'react-native'
import {TouchableOpacity as TouchableOpacity2} from 'react-native-gesture-handler'

export default Platform.OS === 'ios' ? TouchableOpacity : TouchableOpacity2
