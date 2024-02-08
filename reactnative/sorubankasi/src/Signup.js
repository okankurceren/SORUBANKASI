import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Signup() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = () => {
    // KULLANICI ADI SİFRE EMAİL KONTROL ET
    if (!username || !email || !password) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
    } else if (password.length < 6) {
      setErrorMessage('Şifre en az 6 karakter olmalıdır.');
    } else if (!isValidEmail(email)) {
      setErrorMessage('Geçerli bir e-posta adresi girin.');
    } else {
      // BURADA KAYIT İSLEMLERİ YAPILABİLİR
      console.log('Signup:', { username, email, password });
      setErrorMessage(''); // HATA MESAJINI SIFIRLAMAK
      setSuccessMessage('Başarıyla kayıt oldunuz.');
    }
  };

  const isValidEmail = (email) => {
    // EMAİL DOĞRULAMA
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <View style={styles.container}>
      {/* LOGO EKRAN KISMI */}
      <Image
        source={require('./image/logo.png')}
        style={{ width: 250, height: 250, resizeMode: 'contain', alignSelf: 'center', marginTop: 30 }}
      />

      {/* KULLANICI ADI */}
      <View style={styles.inputContainer}>
        <Input
          value={username}
          onChangeText={(text) => setUsername(text)}
          InputLeftElement={
            <Icon
              as={<FontAwesome5 name="user-secret" />}
              size="sm"
              m={2}
              style={{ color: 'black' }}
            />
          }
          variant="outline"
          placeholder="Kullanıcı Adı"
          _light={{
            placeholderTextColor: '#b0c4de',
          }}
          _dark={{
            placeholderTextColor: '#blueGray.50',
          }}
        />
      </View>

      {/* EMAİL */}
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          InputLeftElement={
            <Icon
              as={<FontAwesome5 name="envelope" />}
              size="sm"
              m={2}
              style={{ color: 'black' }}
            />
          }
          variant="outline"
          placeholder="E-posta"
          _light={{
            placeholderTextColor: '#b0c4de',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
      </View>

      {/* SİFRE */}
      <View style={styles.inputContainer}>
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          InputLeftElement={
            <Icon
              as={<FontAwesome5 name="key" />}
              size="sm"
              m={2}
              style={{ color: 'black' }}
            />
          }
          variant="outline"
          secureTextEntry={true}
          placeholder="Şifre"
          _light={{
            placeholderTextColor: '#b0c4de',
          }}
          _dark={{
            placeholderTextColor: 'blueGray.50',
          }}
        />
      </View>

      {/* HATA MESAJI */}
      {errorMessage ? (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>
      ) : null}

      {/* BASARI MESAJI */}
      {successMessage ? (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>{successMessage}</Text>
        </View>
      ) : null}

      {/* KAYIT OL BUTONU */}
      <Button onPress={handleSignup} style={styles.button}>
        Kayıt Ol
      </Button>

      {/* GİRİSE DÖN BUTONU */}
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Girişe Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#2C3E50',
    
  },
  inputContainer: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 20,
    backgroundColor: '#2c3e50',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#2c3e50',
    fontSize: 16,
  },
  errorMessageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  errorMessageText: {
    color: 'red',
  },
  successMessageContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  successMessageText: {
    color: 'green',
  },
});

export default function App() {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
}
