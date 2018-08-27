import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase';
@Injectable()
export class AuthService {

  constructor() {}
  signUp(firstName: string, lastName: string = '', email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // User is signed in.
            user.updateProfile({
              displayName: firstName + lastName,
              photoURL: ''
            });
          }
        })
      );
  }
  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password);
  }
  getToken () {
    firebase.auth().currentUser.getIdToken();
  }
}
