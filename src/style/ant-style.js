import v from '~/style/varible'
import {Platform} from 'react-native'

export const searchBarStyle = {
  input: {
    borderWidth: 0,
    borderRadius: 20,
    height: 34,
    color: '#333333',
    backgroundColor: '#f7f8fa',
  },
  wrapper: {
    color: '#333333',
    backgroundColor: 'none',
    marginLeft: -10,
    marginRight: -10,
  },
  cancelText: {
    color: v.primary,
    fontSize: 14,
    zIndex: 100,
  },
}
export const searchPageBarStyle = {
  input: {
    borderWidth: 0,
    borderRadius: 20,
    height: 34,
    color: '#333333',
    backgroundColor: '#f7f8fa',
  },
  wrapper: {
    color: '#333333',
    backgroundColor: 'none',
    marginLeft: -10,
    marginRight: -10,
  },
  cancelText: {
    color: v.primary,
    fontSize: 14,
    zIndex: 100,
  },
}
export const gradientStyle = {
  gradientStart: '#FFAB96',
  gradientEnd: '#FF2050',
  gradientColor: ['#FFAB96', '#FF2050'],
}
export const searchPageBarStyle2 = {
  input: {
    borderWidth: 0,
    borderRadius: 20,
    height: 34,
    color: '#333333',
    backgroundColor: '#fff',
  },
  wrapper: {
    color: '#333333',
    backgroundColor: 'none',
    marginLeft: 10,
    marginRight: 10,
  },
  cancelText: {
    fontSize: 14,
    zIndex: 100,
  },
}

export const searchPageBarStyle5 = {
  input: {
    borderWidth: 0,
    height: 30,
    borderRadius: 20,
    color: '#333333',
    backgroundColor: '#F7F7F7',
  },
  wrapper: {
    color: '#333333',
    backgroundColor: 'none',
  },
  cancelText: {
    color: v.primary,
    fontSize: 14,
    zIndex: 100,
  },
}

export const videoStyle = {
  videoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },

  // position: 'absolute',
  // top: 0,
  // left: 0,
  // bottom: 0,
  // right: 0,
}

export const searchPageBarStyle3 = {
  input: {
    borderWidth: 0,
    marginHorizontal: 8,
    color: '#3A3A3A',
    backgroundColor: '#f6f7f9',
    borderRadius: 14,
  },
  search: {
    marginLeft: 10,
    fontSize: 18,
  },
  wrapper: {
    backgroundColor: '#fff',
  },
  cancelText: {
    color: '#3A3A3A',
    fontSize: 14,
    lineHeight: 30,
    zIndex: 100,
    paddingRight: 14,
    borderRadius: 15,
  },
}

export const searchPageBarStyle4 = {
  input: {
    borderWidth: 0,
    borderRadius: 20,
    height: 34,
    color: '#333333',
    backgroundColor: '#F7F8F9',
  },
  wrapper: {
    color: '#333333',
    backgroundColor: 'none',
  },
  cancelText: {
    color: v.primary,
    fontSize: 14,
    zIndex: 100,
  },
}

export const stepperStyle = {
  container: {
    backgroundColor: '#f8f9fb',
    borderRadius: 4,
  },
  input: {
    color: v.text,
    fontSize: 14,
    height: Platform.OS === 'android' ? 40 : 'auto',
    // minHeight: 40,
  },
  stepWrap: {
    borderWidth: 0,
    backgroundColor: '#f0f1f3',
  },
  stepText: {
    color: v.text,
    fontWeight: 'normal',
  },
  stepDisabled: {
    borderWidth: 0,
    backgroundColor: '#f0f1f3',
  },
  disabledStepTextColor: {
    color: v.textLighter,
  },
  highlightStepTextColor: {
    color: v.primary,
  },
}

export const inputStyle = {
  text: {
    fontSize: 16,
    color: v.textLight,
  },
  input: {
    fontSize: 16,
    paddingLeft: 10,
  },
}

export const stepStyle = {
  icon_s: {
    color: '#fff',
    borderColor: v.primary,
  },
  tail_blue: {
    backgroundColor: v.primary,
  },
  head_blue_s: {
    borderColor: v.primary,
    backgroundColor: v.primary,
  },
}
