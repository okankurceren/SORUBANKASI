import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzF4dGnPdahun7no0OqKoiKgm-D0DA5XQ",
  authDomain: "soru-8c484.firebaseapp.com",
  projectId: "soru-8c484",
  storageBucket: "soru-8c484.appspot.com",
  messagingSenderId: "742458420661",
  appId: "1:742458420661:web:aa8c3bc2e04c61eaf3fdfc",
  measurementId: "G-VGTMEB1FMT"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const getQuestions = async () => {
  const questionsSnapshot = await firestore.collection('questions').get();
  const questions = questionsSnapshot.docs.map(doc => doc.data());
  return questions;
};

