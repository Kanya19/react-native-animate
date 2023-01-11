import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {SvgXml} from 'react-native-svg'

class MyStep extends React.Component {
  // template
  render() {
    const {list, stepBox, stepItem, active} = this.props
    const num = 2 * list?.length
    let rate = 0
    list.map((item) => {
      if (active >= item.level) {
        rate++
      }
    })
    const styles = StyleSheet.create({
      stepBox: {
        position: 'relative',
        backgroundColor: '#E6E6E6',
        height: 4,
        borderRadius: 2,
        ...stepBox,
      },
      stepItem: {
        position: 'absolute',
        left: 0,
        backgroundColor: '#FF4563',
        height: 4,
        borderRadius: 2,
        width: `${((rate * 2 - 1) * 100) / num}%`,
        ...stepItem,
      },
      listBox: {
        width: '100%',
        position: 'absolute',
        top: -4,
        flexDirection: 'row',
      },
      listItem: {
        width: `${200 / num}%`,
        flexDirection: 'column',
        alignItems: 'center',
      },
      listText: {
        marginTop: 14,
        textAlign: 'center',
      },
    })
    const checkSvg = `
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Untitled</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="checked" transform="translate(0.875000, 0.875000)" fill="#FF4563" fill-rule="nonzero">
                <path d="M7.125,14.2354 C3.197,14.2354 0.0146,11.0514 0.0146,7.125 C0.0146,3.1986 3.197,0.0146 7.125,0.0146 C11.053,0.0146 14.2354,3.1986 14.2354,7.125 C14.2354,11.0514 11.053,14.2354 7.125,14.2354 Z M2.66432873,7.57264347 L5.14139904,9.88153597 C5.32321888,10.0506988 5.61305051,10.0578972 5.79126996,9.8941332 L11.4744901,4.59789733 C11.5933031,4.48632186 11.6023041,4.31895865 11.4888917,4.21278198 L11.3592776,4.09040888 C11.2548662,3.99323024 11.0676457,3.98603182 10.9488328,4.07601205 L5.65265483,8.08553074 C5.55364403,8.16111413 5.37182419,8.16831254 5.2656126,8.10352678 L3.26199395,6.8546013 C3.1359802,6.77721831 2.95956095,6.80421238 2.86415053,6.91578785 L2.63372539,7.18932773 C2.53471458,7.30630202 2.55271655,7.46826642 2.66432873,7.57264347 Z" id="Shape"></path>
            </g>
        </g>
    </svg>`
    return (
      <View style={{height: 50, marginTop: 10}}>
        <View style={styles.stepBox}>
          <View style={styles.stepItem} />
        </View>
        <View style={styles.listBox}>
          {!!list &&
            list.map((item, key) => {
              return (
                <View key={key} style={styles.listItem}>
                  {item.level === active ? (
                    <SvgXml style={{zIndex: 20, backgroundColor: '#fff'}} xml={checkSvg} width={13} height={13} />
                  ) : (
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 6,
                        backgroundColor: item.level <= active ? '#FF4563' : '#E6E6E6',
                      }}
                    />
                  )}

                  <Text style={styles.listText} key={key}>
                    {item.title}
                  </Text>
                </View>
              )
            })}
        </View>
      </View>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  // methods
  getDetail() {}

  // mounted
  componentDidMount(): void {
    this.getDetail()
  }
}

export default MyStep
