import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={require('../assets/lru.png')} />
      </View>

      <View style={[styles.section]}>
        <Text style={styles.text}>สมุนไพรท้องถิ่นไทเลย</Text>
      </View>

      <View style={styles.section}>
        <Image style={styles.coverScreenImage} source={require('../assets/Face.jpg')} />
      </View>

      <View style={styles.screenSection}>
        <Image style={styles.image} source={require('../assets/Face1.png')} />
        <Image style={styles.image} source={require('../assets/Face2.png')} />
        <Image style={styles.image} source={require('../assets/Face3.png')} />
      </View>

      <View style={[styles.section]}>
        <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  },
  coverScreenImage: {
    width: '100%',
    height: 200, // ปรับความสูงตามที่ต้องการ
    resizeMode: 'cover',
    marginTop: 100, // เลื่อนลงข้างล่างเพิ่มเติม
  },
  screenSection: {
    flex: 3,  // ให้ส่วนนี้ใช้พื้นที่มากขึ้น
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 100, // เลื่อนลงข้างล่างเพิ่มเติม
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white'
  },
});

export default Flex;
