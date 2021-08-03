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
  headerContainer: {
    height: 200
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    alignItems: 'center'
  },
  greetingsContainer: {
    flex: 1
  },
  greetDetails: {
    marginRight: SIZES.padding
  },
  greetTxt: {
    color: COLORS.white,
    ...FONTS.h3
  },
  greetName: {
    color: COLORS.white,
    ...FONTS.h2
  },
  pointsContainer: {
    backgroundColor: COLORS.primary,
    height: 40,
    paddingLeft: 3,
    paddingRight: SIZES.radius,
    borderRadius: 20
  },
  pointsInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pointsInner: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  pointsImage: {
    width: 20,
    height: 20
  },
  points: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3
  },
  headBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding
  },
  headBtn: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius
  },
  headClaim: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  claimImage: {
    width: 30,
    height: 30
  },
  claim: {
    marginLeft: SIZES.base,
    color: COLORS.white,
    ...FONTS.body3
  },
  bodyContainer: {
    marginTop: SIZES.radius
  },
  headerBook: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bookTitle: {
    color: COLORS.white,
    ...FONTS.h2
  },
  bookMore: {
    color: COLORS.lightGray,
    alignSelf: 'flex-start',
    textDecorationLine: 'underline',
    ...FONTS.body3
  },
  bookContainer: {
    flex: 1,
    marginTop: SIZES.padding
  },
  bookItem: {
    flex: 1,
    marginRight: SIZES.radius
  },
  bookCover: {
    width: 180,
    height: 250,
    borderRadius: 20
  },
  bookInfo: {
    marginTop: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center'
  },
  clock: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray
  },
  infoTxt: {
    marginLeft: 5,
    color: COLORS.lightGray,
    ...FONTS.body3
  },
  page: {
    marginLeft: SIZES.radius,
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray
  },
  categoryMainContainer: {
    marginTop: SIZES.padding
  },
  cHeaderContainer: {
    flex: 1,
    paddingLeft: SIZES.padding
  },
  cHeaderList: {},
  itemContainer: {
    flex: 1,
    marginRight: SIZES.padding
  },
  itemPositive: {
    color: COLORS.white,
    ...FONTS.h2
  },
  itemNegative: {
    color: COLORS.lightGray,
    ...FONTS.h2
  },
  cDataContainer: {
    flex: 1,
    marginTop: SIZES.radius,
    paddingLeft: SIZES.padding
  },
  dataItemContainer: {
    marginVertical: SIZES.base
  },
  dataItem: {
    flex: 1,
    flexDirection: 'row'
  },
  dataCover: {
    width: 100,
    height: 150,
    borderRadius: 10
  },
  dataDetails: {
    flex: 1,
    marginLeft: SIZES.radius
  },
  bookName: {
    paddingRight: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2
  },
  author: {
    color: COLORS.lightGray,
    ...FONTS.h3
  },
  bookData: {
    flexDirection: 'row',
    marginTop: SIZES.radius
  },
  pageFill: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray
  },
  pageNo: {
    color: COLORS.lightGray,
    paddingHorizontal: SIZES.radius,
    ...FONTS.body4
  },
  genreContainer: {
    flexDirection: 'row',
    marginTop: SIZES.base
  },
  genre: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.base,
    marginRight: SIZES.base,
    height: 40,
    borderRadius: SIZES.radius
  },
  genreTxt: {
    ...FONTS.body3
  },
  bookmarkContainer: {
    position: 'absolute',
    top: 5,
    right: 2
  },
  bookmark: {
    width: 25,
    height: 25,
    tintColor: COLORS.lightGray
  }
});

export { styles };
