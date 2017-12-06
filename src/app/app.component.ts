///<reference path="../../node_modules/firebase/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = 'recipe' ;
  onNavigate(feature:string) {
    this.loadedFeature = feature ;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyDJmI8wUPeBTh4cHt1noF9NKVccncfzweU',
      authDomain: 'ng-recipe-book-27d45.firebaseapp.com'
    });
  }





}
