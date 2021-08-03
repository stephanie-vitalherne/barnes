import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';
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

  if (book) {
    return (
      <View style={styles.mainContainer}>
        {/* Book Cover */}
        <View style={styles.coverContainer}>{renderBookInfo()}</View>
        {/* Description */}
        <View style={styles.descContainer}></View>
        {/* Buttons */}
        <View style={styles.btnContainer}></View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default BookDetail;
