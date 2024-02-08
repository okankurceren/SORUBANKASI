// index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SoruBank = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'movies' })}
        >
          <Text style={styles.categoryTitle}>Sanat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'literature' })}
        >
          <Text style={styles.categoryTitle}>Coğrafya</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'sports' })}
        >
          <Text style={styles.categoryTitle}>Spor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'world-affairs' })}
        >
          <Text style={styles.categoryTitle}>Tarih</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'technology' })}
        >
          <Text style={styles.categoryTitle}>Teknoloji</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.category}
          onPress={() => navigation.navigate('playground', { category: 'science' })}
        >
          <Text style={styles.categoryTitle}>Bilim</Text>
        </TouchableOpacity>
      </View>

      {/* GERİ DÖN BUTONU */}
      <TouchableOpacity style={styles.goBackButton} onPress={navigateToLogin}>
        <Text style={styles.goBackButtonText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  categoryContainer: {
    marginTop: 20,
  },
  category: {
    width: 300,
    height: 60,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2980B9',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ECF0F1',
  },
  goBackButton: {
    backgroundColor: '#E74C3C',
    padding: 15,
    margin: 20,
    borderRadius: 15,
    alignSelf: 'center',
    shadowColor: '#C0392B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  goBackButtonText: {
    color: '#ECF0F1',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SoruBank;
