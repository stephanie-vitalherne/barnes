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
import { COLORS, SIZES, icons } from '../../constants';
import { styles } from './styles';

// DATA
import { profileData, categoriesData, myBooksData } from './data';

// COMPONENTS
import { LineDivider } from '../../components';

const Home = ({ navigation }) => {
  const [profile] = useState(profileData);
  const [myBook] = useState(myBooksData);
  const [categories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  function renderHeader(prof) {
    return (
      <View style={styles.profileContainer}>
        {/* Greetings */}
        <View style={styles.greetingsContainer}>
          <View style={styles.greetDetails}>
            <Text style={styles.greetTxt}>Good Morning</Text>
            <Text style={styles.greetName}>{prof.name}</Text>
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
          onPress={() => navigation.navigate('BookDetail', { book: item })}
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

  function renderCategoryHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => setSelectedCategory(item.id)}>
          {selectedCategory === item.id && (
            <Text style={styles.itemPositive}>{item.categoryName}</Text>
          )}
          {selectedCategory !== item.id && (
            <Text style={styles.itemNegative}>{item.categoryName}</Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.cHeaderContainer}>
        <FlatList
          horizontal
          data={categories}
          renderItem={renderItem}
          style={styles.cHeaderList}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];
    let selectedCategoryBooks = categories.filter(
      a => a.id === selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    const renderItem = ({ item }) => {
      return (
        <View style={styles.dataItemContainer}>
          <TouchableOpacity
            style={styles.dataItem}
            onPress={() => navigation.navigate('BookDetail', { book: item })}>
            <Image
              resizeMode="cover"
              source={item.bookCover}
              style={styles.dataCover}
            />
            <View style={styles.dataDetails}>
              {/* Book Name and Author */}
              <View>
                <Text style={styles.bookName}>{item.bookName}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </View>

              {/* Book Info */}
              <View style={styles.bookData}>
                <Image
                  source={icons.page_filled_icon}
                  style={styles.pageFill}
                  resizeMode="contain"
                />
                <Text style={styles.pageNo}>{item.pageNo}</Text>
                <Image
                  source={icons.read_icon}
                  style={styles.pageFill}
                  resizeMode="contain"
                />
                <Text style={styles.pageNo}>{item.read}</Text>
              </View>

              {/* Genre */}
              <View style={styles.genreContainer}>
                {item.genre.includes('Adventure') && (
                  <View
                    style={[
                      styles.genre,
                      { backgroundColor: COLORS.darkGreen }
                    ]}>
                    <Text
                      style={[styles.genreTxt, { color: COLORS.lightGreen }]}>
                      Adventure
                    </Text>
                  </View>
                )}
                {item.genre.includes('Romance') && (
                  <View
                    style={[styles.genre, { backgroundColor: COLORS.darkRed }]}>
                    <Text style={[styles.genreTxt, { color: COLORS.lightRed }]}>
                      Romance
                    </Text>
                  </View>
                )}
                {item.genre.includes('Drama') && (
                  <View
                    style={[
                      styles.genre,
                      { backgroundColor: COLORS.darkBlue }
                    ]}>
                    <Text
                      style={[styles.genreTxt, { color: COLORS.lightBlue }]}>
                      Drama
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={styles.bookmarkContainer}
            onPress={() => console.log('Bookmark')}>
            <Image
              resizeMode="contain"
              style={styles.bookmark}
              source={icons.bookmark_icon}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={styles.cDataContainer}>
        <FlatList
          data={books}
          renderItem={renderItem}
          style={styles.cDataList}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
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
        <View style={styles.categoryMainContainer}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
