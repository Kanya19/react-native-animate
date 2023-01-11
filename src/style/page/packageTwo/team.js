module.exports = {
  pageBox: {minHeight: '100%', backgroundColor: '#f8f8f8'},
  emptyWrap: {
    textAlign: 'center',
    marginTop: 20,
    marginRight: 0,
    marginBottom: 20,
    marginLeft: 0,
    fontSize: 13,
    color: '#cdcdcd',
  },
  userBox: {marginTop: 16, marginRight: 20, marginBottom: 0, marginLeft: 20, borderRadius: 8, position: 'relative'},
  userBg: {transform: [{translateY: 10}]},
  userAvatar: {
    position: 'absolute',
    width: 76,
    height: 76,
    zIndex: 200,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    marginLeft: 24,
    marginTop: -8,
    bottom: 4,
  },
  userInfoWrap: {
    backgroundColor: '#fff',
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfoLeft: {paddingLeft: 9, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'},
  nickname: {fontSize: 14, fontWeight: '400', lineHeight: 20, color: '#3A3A3A'},
  level: {
    marginRight: 4,
    marginTop: 4,
    fontSize: 12,
    fontWeight: '400',
    color: '#898989',
    lineHeight: 20,
    paddingTop: 0,
    paddingRight: 7,
    paddingBottom: 0,
    paddingLeft: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
  },
  userInfoRight: {alignItems: 'center'},
  cardWrap: {flexDirection: 'row', alignItems: 'center'},
  codeWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    marginTop: 10,
    paddingTop: 8,
    paddingRight: 18,
    paddingBottom: 8,
    paddingLeft: 18,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 25,
  },
  userId: {width: 20, height: 15, marginRight: 3},
  userData: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    paddingTop: 20,
    paddingRight: 0,
    paddingBottom: 20,
    paddingLeft: 0,
  },
  dataWrap: {width: '25%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'},
  dataIcon: {width: 30, height: 30},
  label: {textAlign: 'center', marginTop: 12, fontSize: 12, fontWeight: '400', color: '#B3B3B3', lineHeight: 17},
  value: {textAlign: 'center', fontSize: 15, fontWeight: '400', color: '#3A3A3A', lineHeight: 31},
  teamWrap: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginTop: 1,
    marginRight: 20,
    marginBottom: 1,
    marginLeft: 20,
    paddingTop: 20,
    paddingRight: 5,
    paddingBottom: 20,
    paddingLeft: 5,
    backgroundColor: '#fff',
  },
  title: {
    textIndent: 10,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '500',
    color: '#3A3A3A',
    lineHeight: 24,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  all: {flexDirection: 'row', alignItems: 'center'},
  revenueWrap: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 32,
    paddingRight: 5,
    paddingBottom: 0,
    paddingLeft: 5,
  },
  revenueHead: {flexDirection: 'row', justifyContent: 'space-between'},
  revenueHeadText: {
    width: '25%',
    color: '#222222',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 40,
  },
  revenueItem: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    marginRight: 20,
    marginBottom: 0,
    marginLeft: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    paddingRight: 0,
    paddingBottom: 12,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  revenueItemText: {fontSize: 13, fontWeight: '400', color: '#898989', textAlign: 'center'},
}
