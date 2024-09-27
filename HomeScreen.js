import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {House, CornerRightUp, AlignJustify} from 'lucide-react';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const products =[{
    id: 1,
    name: 'Ca nấu lẩu, nấu mì mini 16cm',
    store: 'Devang',
    image: require('./img/noi_nau_mi.jpg'),
  },
  {
    id: 2,
    name: '1KG KHÔ GÀ BƠ TỎI SIÊU NGON',
    store: 'LTD Food',
    image: require('./img/kho_ga.jpg'),
  },
  {
    id: 3,
    name: 'Xe cần cẩu đa năng',
    store: 'Thế giới đồ chơi',
    image: require('./img/xe_can_cau.jpg'),
  },
  {
    id: 4,
    name: 'Đồ chơi dạng mô hình',
    store: 'Thế giới đồ chơi',
    image: require('./img/mo-hinh.jpg'),
  },
  {
    id: 5,
    name: 'Lãnh đạo giản đơn',
    store: 'Minh Long Book',
    image: require('./img/lanh_dao.png'),
  },
  {
    id: 6,
    name: 'Hiểu lòng con trẻ',
    store: 'Minh Long Book',
    image: require('./img/hieu_long_con_tre.webp'),
  },
  {
    id: 7,
    name: 'Thiên tài lãnh đạo',
    store: 'Minh Long Book',
    image: require('./img/thien_tai.jpg'),
  },
  ];
const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text><Text style={styles.storeName}>Shop </Text>{item.store}</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.doneButton}><Text style={styles.doneButtonText}>CHAT</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Icon name="shopping-cart" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.footerButton}>
          <AlignJustify size={24}/>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}>
          <House size={24}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <CornerRightUp size={24}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeName: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    alignItems: 'flex-end'
  },
  doneButton: {
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
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
  }
});

export default HomeScreen;