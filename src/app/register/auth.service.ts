import {
  Subject
} from 'rxjs/Subject';
import {
  Injectable
} from '@angular/core';
import firebase = require('firebase');
@Injectable()
export class AuthService {
  processSuccess = new Subject < boolean > ();
  userName = new Subject < string > ();

  constructor() {}
  signUp(firstName: string, lastName: string = '', email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (data) => {
          this.processSuccess.next(true);
          const {
            user
          } = data;
          if (user) {
            // User is signed in.
            user.updateProfile({
              displayName: firstName + ' ' + lastName,
              photoURL: ''
            }).then(
              (s) => {
                this.userName.next(user.displayName);
              }
            );
          }
        });
  }
  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (data) => {
        const userName = data.user.displayName;
        this.userName.next(userName);
        this.processSuccess.next(true);
      }
    );


  }
  getToken() {
    firebase.auth().currentUser.getIdToken();
  }
}
