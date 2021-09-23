import { SignupComponent } from './../../components/signup/signup.component';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Router } from '@angular/router';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  isAdmin: any;
  userState!: User;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private store: AngularFirestore,
    private customer: SignupComponent) {
    this.auth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.removeItem('user');
        JSON.parse(localStorage.getItem('user') || '{}'); // FIXME Maybe not needed at all, check later.
      }
    })
  }

  /**
   * Sign in using email and password
   *
   * @param {string} email
   * @param {string} password
   * @memberof AuthService
   */
  async SignIn(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      await this.SetUserData(result.user);
      this.router.navigate(['user-panel']);
    }
    catch (error: any) {
      console.log(error.message);
    }
  }


  /**
   * Sign up using email and password
   *
   * @param {string} email
   * @param {string} password
   * @memberof AuthService
   */
  async SignUp(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      this.SendVerifyMail();
      this.SetUserData(result.user);
      this.customer.SetUID(this.userState.uid);
    } catch (error: any) {
      console.log(error.message);
    }
  }


  /**
   * Forgot password with email
   *
   * @param {string} email
   * @memberof AuthService
   */
  async ForgotPassword(email: string) {
    try {
      await this.auth.sendPasswordResetEmail(email);
      console.log('Password reset email sent. Check your inbox.');
    } catch (error: any) {
      console.log(error.message);
    }
  }


  /**
   * Will be used in Auth Guard.
   *
   * @readonly
   * @type {boolean}
   * @memberof AuthService
   */
  get isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }


  /**
   * Google Auth
   *
   * @return {*}
   * @memberof AuthService
   */
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }


  /**
   * Send verification email
   *
   * @return {*}
   * @memberof AuthService
   */
  async SendVerifyMail() {
    return this.auth.currentUser
    .then((u) => u?.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verify-email']);
    });
  }


  /**
   * Function for enabling provider logins
   *
   * @param {*} provider
   * @memberof AuthService
   */
  async AuthLogin(provider: any) {
    try {
      const result = await this.auth.signInWithPopup(provider);
      await this.SetUserData(result.user);
      this.router.navigate(['user-panel']);
    } catch (error: any) {
      console.log(error.message);
    }
  }


  /**
   * Inputs data into Firestore
   *
   * @param {*} user
   * @return {*}
   * @memberof AuthService
   */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.store.doc(`users/${user.uid}`);
    this.userState = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
    };
    return userRef.set(this.userState, {
      merge: true
    });
  }

  /**
   * Sign out
   *
   * @memberof AuthService
   */
  async SignOut() {
    this.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
