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
  }
});

export { styles };
