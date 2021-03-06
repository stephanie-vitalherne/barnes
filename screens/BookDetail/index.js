/* eslint-disable comma-dangle */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated
} from 'react-native';
import { SIZES, icons } from '../../constants';
import { styles } from './styles';

const LineDivider = () => {
  return (
    <View style={styles.lineDivider}>
      <View style={styles.line} />
    </View>
  );
};

const BookDetail = ({ route, navigation }) => {
  const [book, setBook] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(1);
  const [scrollVisibleHeight, setScrollVisibleHeight] = useState(0);
  const indicator = new Animated.Value(0);

  useEffect(() => {
    let { book } = route.params;
    setBook(book);
  }, [book]);

  function renderBookInfo() {
    return (
      <View style={styles.flex}>
        <ImageBackground
          resizeMode="cover"
          source={book.bookCover}
          style={styles.infoCover}
        />

        {/* Color Overlay */}
        <View
          style={[styles.infoCover, { backgroundColor: book.backgroundColor }]}
        />
        {/* Navigation Header */}
        <View style={styles.navHeader}>
          <TouchableOpacity
            style={styles.nav}
            onPress={() => navigation.goBack()}>
            <Image
              style={[styles.arrow, { tintColor: book.navTintColor }]}
              source={icons.back_arrow_icon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.navTitle}>
            <Text style={[styles.title, { color: book.navTintColor }]}>
              Book Detail
            </Text>
          </View>

          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => console.log('Click More')}>
            <Image
              resizeMode="contain"
              style={[styles.moreBtn, { tintColor: book.navTintColor }]}
              source={icons.more_icon}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View style={styles.bookCoverContainer}>
          <Image
            style={styles.bookCover}
            source={book.bookCover}
            resizeMode="contain"
          />
        </View>

        {/* Name & Author */}
        <View style={styles.bookDesc}>
          <Text style={[styles.bookName, { color: book.navTintColor }]}>
            {book.bookName}
          </Text>
          <Text style={[styles.author, { color: book.navTintColor }]}>
            {book.author}
          </Text>
        </View>

        {/* Book Info */}
        <View style={styles.bookInfo}>
          {/* Rating */}
          <View style={styles.bookRating}>
            <Text style={styles.rating}>{book.rating}</Text>
            <Text style={styles.ratingTxt}>Rating</Text>
          </View>
          <LineDivider />

          {/* Pages */}
          <View
            style={[styles.bookRating, { paddingHorizontal: SIZES.radius }]}>
            <Text style={styles.rating}>{book.pageNo}</Text>
            <Text style={styles.ratingTxt}>Number of Pages</Text>
          </View>
          <LineDivider />

          {/* Language */}
          <View style={styles.bookRating}>
            <Text style={styles.rating}>{book.language}</Text>
            <Text style={styles.ratingTxt}>Language</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderDescription() {
    const indicatorSize =
      scrollHeight > scrollVisibleHeight
        ? (scrollVisibleHeight * scrollVisibleHeight) / scrollHeight
        : scrollVisibleHeight;
    const difference =
      scrollVisibleHeight > indicatorSize
        ? scrollVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={styles.scrollContainer}>
        <View style={styles.scroll}>
          <Animated.View
            style={[
              styles.scrollBar,
              {
                height: indicatorSize,
                transform: [
                  {
                    translateY: Animated.multiply(
                      indicator,
                      scrollVisibleHeight / scrollHeight
                    ).interpolate({
                      inputRange: [0, difference],
                      outputRange: [0, difference],
                      extrapolate: 'clamp'
                    })
                  }
                ]
              }
            ]}
          />
        </View>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.descContainer}
          onContentSizeChange={(width, height) => {
            setScrollHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: { x, y, width, height }
            }
          }) => {
            setScrollVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: indicator } } }],
            { useNativeDriver: false }
          )}>
          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.descTxt}>{book.description}</Text>
        </ScrollView>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View style={styles.buttons}>
        {/* Bookmark */}
        <TouchableOpacity
          style={styles.bookmark}
          onPress={() => console.log('Bookmark')}>
          <Image
            source={icons.bookmark_icon}
            style={styles.bookmarkIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Start */}
        <TouchableOpacity
          style={styles.start}
          onPress={() => console.log('Start Reading')}>
          <Text style={styles.reading}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (book) {
    return (
      <View style={styles.mainContainer}>
        {/* Book Cover */}
        <View style={styles.coverContainer}>{renderBookInfo()}</View>
        {/* Description */}
        <View style={styles.descMainContainer}>{renderDescription()}</View>
        {/* Buttons */}
        <View style={styles.btnContainer}>{renderButtons()}</View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;
