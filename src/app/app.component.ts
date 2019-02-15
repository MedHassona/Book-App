import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    const config = {
      apiKey: "AIzaSyDXjgU5rTZ7CGViaomXUtJM12WyV9VJbUs",
      authDomain: "books-a.firebaseapp.com",
      databaseURL: "https://books-a.firebaseio.com",
      projectId: "books-a",
      storageBucket: "books-a.appspot.com",
      messagingSenderId: "901211135513"
    };
    firebase.initializeApp(config);
  }

  title = 'app';
}
