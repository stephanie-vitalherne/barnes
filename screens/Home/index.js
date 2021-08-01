import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
import { styles } from './styles';

import {
  profileData,
  bookOtherWordsForHome,
  bookTheMetropolis,
  bookTheTinyDragon,
  categoriesData,
  myBooksData
} from './data';

const Home = ({ navigation }) => {
  const [profile, setProfile] = useState(profileData);
  const [myBook, setMyBook] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  function renderHeader(profile) {
    return (
      <View style={styles.profileContainer}>
        {/* Greetings */}
        <View style={styles.greetingsContainer}>
          <View style={styles.greetDetails}>
            <Text style={styles.greetTxt}>Good Morning</Text>
            <Text style={styles.greetName}>{profile.name}</Text>
          </View>
        </View>

        {/* Points */}
        <TouchableOpacity
          style={styles.pointsContainer}
          onPress={() => console.log('Point')}>
          <View style={styles.pointsInnerContainer}>
            <View style={styles.pointsInner}>
              <Image
                style={styles.pointsImage}
                source={icons.plus_icon}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.points}>{profile.point} points</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={styles.headBtnContainer}>
        <View style={styles.headBtn}>
          {/* CLaim */}
          <TouchableOpacity
            style={styles.flex}
            onPress={() => console.log('Claim')}>
            <View style={styles.headClaim}>
              <Image
                resizeMode="contain"
                style={styles.claimImage}
                source={icons.claim_icon}
              />
              <Text style={styles.claim}>Claim</Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}

          {/* Get Points */}

          {/* Divider */}

          {/* My Card */}
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {renderHeader(profile)}
        {renderButton()}
      </View>

      {/* Body */}
    </SafeAreaView>
  );
};

export default Home;
