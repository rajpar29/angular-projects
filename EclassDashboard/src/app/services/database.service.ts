import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public db: AngularFirestore) { }

  browseList = [];
  browseStudyList = [];


  createAssignment(assign) {
    var assignRef = this.db.collection("assignments");
    console.log();
    assignRef.doc(assign.title + (new Date().getTime())).set(assign).then(
      res=>{
        alert("successful");
      },
    err => {
      alert("Error");
    });

  }

  createStudyMaterial(studyMaterial) {
    var assignRef = this.db.collection("study_material");
    console.log();
    assignRef.doc(studyMaterial.title + (new Date().getTime())).set(studyMaterial).then(
      res=>{
        alert("successful");
      },
    err => {
      alert("Error");
    });
;
  }
  create(obj, type) {
    var assignRef = this.db.collection(type);
    assignRef.doc(obj.title + (new Date().getTime())).set(obj);
  }

  getAssignmentList() {
    this.browseList = [];
    var assignRef = firebase.firestore().collection("assignments");
    assignRef.get().then(querySnap => {
      querySnap.forEach(doc => {
        this.browseList.push(doc.data());
        console.log(doc.id, ' ==> ', doc.data());
      })
    });
    return this.browseList;
  }

  getStudyMaterialList() {
    this.browseStudyList = [];
    var assignRef = firebase.firestore().collection("study_material");
    assignRef.get().then(querySnap => {
      querySnap.forEach(doc => {
        this.browseStudyList.push(doc.data());
        console.log(doc.id, ' ==> ', doc.data());
      })
    });
    return this.browseStudyList;
  }

  getItem(index: number){

    return this.browseList[index];

  }
  getStudyItem(index: number){

    return this.browseStudyList[index];

  }

}
