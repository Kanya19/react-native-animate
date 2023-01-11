import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'
import Modal from 'react-native-modal'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import TouchableOpacity from '~/component/touchable-opacity'
import Icon from 'react-native-vector-icons/AntDesign'

class VideoModal extends React.Component {
  // template
  render() {
    const {videoUrl, size} = this.props
    const {isVisible} = this.state
    const width = Dimensions.get('window').width
    const styles = StyleSheet.create({
      box: {
        position: 'relative',
      },
      icon: {
        width: 16,
        height: 16,
        position: 'absolute',
        left: (size || 80) / 2 - 8,
        top: (size || 80) / 2 - 8,
      },
    })
    return (
      <>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            this.setState({
              isVisible: true,
            })
          }}>
          <Video
            disableBack
            disableVolume
            resizeMode={'contain'}
            source={{uri: videoUrl}}
            controls={false}
            onLoad={this.onLoad}
            muted
            repeat
            paused={true}
            style={{width: size || 80, height: size || 80, backgroundColor: '#000'}}
          />
          <Icon style={styles.icon} name="caretright" size={16} color={'#fff'} />
        </TouchableOpacity>
        <Modal
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            zIndex: 0,
          }}
          onBackdropPress={() => {
            this.setState({isVisible: false})
          }}
          isVisible={isVisible}
          propagateSwipe={true}>
          {!!videoUrl && (
            <VideoPlayer
              onBack={() => {
                this.setState({isVisible: false})
              }}
              disableFullscreen
              disableVolume
              resizeMode={'contain'}
              source={{uri: videoUrl}}
              controls={false}
              muted
              repeat
              style={{width: width, height: 200, backgroundColor: '#000'}}
            />
          )}
        </Modal>
      </>
    )
  }

  // data
  constructor(props: any) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  // methods
  getDetail() {}
  onLoad = (event) => {
    console.log('event', event)
    if (this.props.onLoad) {
      this.props.onLoad(event)
    }
  }
  // mounted
  componentDidMount(): void {
    this.getDetail()
  }
}

export default VideoModal
