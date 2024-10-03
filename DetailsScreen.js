import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const DetailsScreen = () => {
  const navigation = useNavigation();
  const Rating = ({ rating, reviewCount }) => {
    return (
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }, (v, i) => (
          <Icon
            key={i}
            name={i < rating ? 'star' : 'star-border'}
            size={20}
            color={i < rating ? '#FFD700' : '#ccc'}
          />
        ))}
        <Text style={styles.reviewCount}>({reviewCount})</Text>
      </View>
    );
  };
  const products = [{
    id: 1,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/giacchuyen.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  {
    id: 2,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/daychuyen.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  {
    id: 3,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/dauchuyendoi.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  {
    id: 4,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/dauchuyendoito.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  {
    id: 5,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/daycam.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  {
    id: 6,
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    image: require('./img/daucamtim.png'),
    rating: 4.0,
    reviewCount: 15,
  },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Rating rating={item.rating} reviewCount={item.reviewCount} />
      </View>
      <View style={styles.price}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.discount}>-39%</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Dây cáp usb"
          placeholderTextColor="#bfbfbf"
        />
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="shopping-cart" size={24} color="#fff" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="more-horiz" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="menu" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="navigate-next" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    height: 60,
    backgroundColor: '#00CED1',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerButton: {
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  cartButton: {
    marginLeft: 10,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  moreButton: {
    marginLeft: 10,
  },
  footer: {
    height: 60,
    backgroundColor: '#00CED1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 20,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
  price: {
    flexDirection: 'row',

  },
  discount: {
    color: '#c2c4ca',
  },

});

export default DetailsScreen;