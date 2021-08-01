/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
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

// DATA
import {
  profileData,
  bookOtherWordsForHome,
  bookTheMetropolis,
  bookTheTinyDragon,
  categoriesData,
  myBooksData
} from './data';

// COMPONENTS
import { LineDivider } from '../../components';

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
          <LineDivider />

          {/* Get Points */}
          <TouchableOpacity
            style={styles.flex}
            onPress={() => console.log('Get Points')}>
            <View style={styles.headClaim}>
              <Image
                resizeMode="contain"
                source={icons.point_icon}
                style={styles.claimImage}
              />
              <Text style={styles.claim}>Get Point</Text>
            </View>
          </TouchableOpacity>
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={styles.flex}
            onPress={() => console.log('Card')}>
            <View style={styles.headClaim}>
              <Image
                resizeMode="contain"
                source={icons.card_icon}
                style={styles.claimImage}
              />
              <Text style={styles.claim}>My Card</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBooks(myBooks) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          onPress={() => console.log('Book Item')}
          style={[
            styles.bookItem,
            { marginLeft: index === 0 ? SIZES.padding : 0 }
          ]}>
          {/* Book Cover */}
          <Image
            resizeMode="cover"
            source={item.bookCover}
            style={styles.bookCover}
          />

          {/* Book Info */}
          <View style={styles.bookInfo}>
            <Image source={icons.clock_icon} style={styles.clock} />
            <Text style={styles.infoTxt}>{item.lastRead}</Text>
            <Image source={icons.page_icon} style={styles.page} />
            <Text style={styles.infoTxt}>{item.completion}</Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.flex}>
        {/* Header */}
        <View style={styles.headerBook}>
          <Text style={styles.bookTitle}>My Book</Text>
          <TouchableOpacity onPress={() => console.log('See More')}>
            <Text style={styles.bookMore}>see more</Text>
          </TouchableOpacity>
        </View>

        {/* Book */}
        <View style={styles.bookContainer}>
          <FlatList
            horizontal
            data={myBooks}
            style={styles.bookList}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            showsHorizontalScrollIndicator={false}
          />
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
      <ScrollView style={styles.bodyContainer}>
        {/* Book */}
        {renderMyBooks(myBook)}

        {/* Categories */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
