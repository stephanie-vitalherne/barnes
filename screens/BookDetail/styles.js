/* eslint-disable comma-dangle */
import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.black
  },
  coverContainer: {
    flex: 4
  },
  infoCover: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  navHeader: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.radius,
    height: 80,
    alignItems: 'flex-end'
  },
  nav: {
    marginLeft: SIZES.base
  },
  arrow: {
    width: 25,
    height: 25
  },
  navTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...FONTS.h3
  },
  navBtn: {
    marginRight: SIZES.base
  },
  moreBtn: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end'
  },
  bookCoverContainer: {
    flex: 5,
    paddingTop: SIZES.padding2,
    alignItems: 'center'
  },
  bookCover: {
    flex: 1,
    width: 150,
    height: 'auto'
  },
  bookDesc: {
    flex: 1.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookName: {
    ...FONTS.h2
  },
  author: {
    ...FONTS.body3
  },
  bookInfo: {
    flexDirection: 'row',
    paddingVertical: 20,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  bookRating: {
    flex: 1,
    alignItems: 'center'
  },
  rating: {
    color: COLORS.white,
    ...FONTS.h3
  },
  ratingTxt: {
    color: COLORS.white,
    ...FONTS.body4
  },
  lineDivider: {
    width: 1,
    paddingVertical: 5
  },
  line: {
    flex: 1,
    borderLeftColor: COLORS.lightGray2,
    borderLeftWidth: 1
  },
  descMainContainer: {
    flex: 2
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: SIZES.padding
  },
  scroll: {
    width: 4,
    height: '100%',
    backgroundColor: COLORS.gray1
  },
  scrollBar: {
    width: 4,
    backgroundColor: COLORS.lightGray4
  },
  descContainer: {
    paddingLeft: SIZES.padding2
  },
  descTitle: {
    color: COLORS.white,
    marginBottom: SIZES.padding,
    ...FONTS.h2
  },
  descTxt: {
    color: COLORS.lightGray,
    ...FONTS.body2
  },
  btnContainer: {
    height: 70,
    marginBottom: 30
  },
  buttons: {
    flexDirection: 'row',
    flex: 1
  },
  bookmark: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    marginLeft: SIZES.padding,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius
  },
  bookmarkIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray2
  },
  start: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  reading: {
    color: COLORS.white,
    ...FONTS.h3
  }
});

export { styles };
