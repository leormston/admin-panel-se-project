// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
if (!firebase.apps.length) {
  var fire = firebase.initializeApp({
      apiKey: "AIzaSyDXLSZVXuaWn-8Zf2H4vRYZkonjaZWTr0A",
      authDomain: "nativeprojec.firebaseapp.com",
      projectId: "nativeprojec",
      storageBucket: "nativeprojec.appspot.com",
      messagingSenderId: "547328994357",
      appId: "1:547328994357:web:77ebc260422076d87b157c"
  });
}else {
  var fire = firebase.app(); // if already initialized, use that one
}
fire.firestore().settings({ experimentalForceLongPolling: true });
export const auth = fire.auth();
export var db = fire.firestore();
db.settings({ experimentalForceLongPolling: true });

export default {
  fire,
};