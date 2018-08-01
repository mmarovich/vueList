import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAH_7847b75ySrKr3TwhJH06dK-T8PVK0o',
  authDomain: 'vuelist-30d21.firebaseapp.com',
  databaseURL: 'https://vuelist-30d21.firebaseio.com',
  projectId: 'vuelist-30d21',
  storageBucket: 'vuelist-30d21.appspot.com',
  messagingSenderId: '619594222179'
}
const firebaseapp = firebase.initializeApp(config)

export default firebaseapp.firestore()