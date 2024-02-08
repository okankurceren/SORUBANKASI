import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const navigateToHome = () => {
    setLoginMessage('Giriş başarılı');
    navigation.replace('sorubank'); // 'sorubank' ekranına yönlendir
  };

  const handleLogin = () => {
    if (username === 'user1' && password === 'pass1') {
      navigateToHome();
    } else {
      setLoginMessage('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./image/logo.png')}
        style={{ width: 300, height: 300, resizeMode: 'contain', alignSelf: 'center', marginTop: 50 }}
      />

      <View style={styles.text2}>
        <Text>
          Hesabınız Yok mu?
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}> Kayıt Ol</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            value={username}
            onChangeText={(text) => setUsername(text)}
            InputLeftElement={
              <Icon as={<FontAwesome5 name="user-secret" />} size="sm" m={2} style={{ color: 'black' }} />
            }
            variant="outline"
            placeholder="Kullanıcı Adı ya da Email"
            _light={{
              placeholderTextColor: '#b0c4de',
            }}
            _dark={{
              placeholderTextColor: '#blueGray.50',
            }}
          />
        </View>
      </View>

      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            InputLeftElement={<Icon as={<FontAwesome5 name="key" />} size="sm" m={2} style={{ color: 'black' }} />}
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
      </View>

      <View style={styles.buttonStyle}>
        <Button onPress={handleLogin} style={styles.buttonDesign}>
          Giriş Yap
        </Button>
      </View>

      <View style={styles.messageStyle}>
        <Text>{loginMessage}</Text>
      </View>

      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 50, textAlign: 'center' }}>Ya da</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

      <View style={styles.boxStyle}>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 60, width: 60, marginLeft: 10 }}
          shadow={3}
          _light={{
            backgroundColor: 'gray.50',
          }}
          _dark={{
            backgroundColor: 'gray.700',
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
              }}
              alt="GOOGLE"
            />
          </AspectRatio>
        </Box>
        <Box
          onPress={() => navigation.navigate('#')}
          style={{ height: 60, width: 60, marginLeft: 10 }}
          shadow={3}
          _light={{
            backgroundColor: 'gray.50',
          }}
          _dark={{
            backgroundColor: 'gray.700',
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <Image
              roundedTop="lg"
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png',
              }}
              alt="FACEBOOK"
            />
          </AspectRatio>
        </Box>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor:'#2C3E50',
    },
    text2: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    signupText: {
      fontWeight: 'bold',
      marginLeft: 5,
      color:'#fff',
    },
    buttonStyle: {
      marginTop: 20,
    },
    emailInput: {
      width: '100%',
    },
    buttonStyleX: {
      marginTop: 15,
    },
    buttonDesign: {
      backgroundColor: '#2196F3',
    },
    messageStyle: {
      marginTop: 15,
      alignItems: 'center',
    },
    lineStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    boxStyle: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default function App() {
    return (
      <NativeBaseProvider>
        <Login />
      </NativeBaseProvider>
    );
  }
