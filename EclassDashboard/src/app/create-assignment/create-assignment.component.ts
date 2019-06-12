import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {

  constructor( public databaseServ: DatabaseService) {
    databaseServ.getAssignmentList();
   }
  
  title: string = '';
  description: string = '';
  selectSem: string = '';
  selectBranch: string = '';
  selectType: string = '';
  selectSubject: string = '';
  fileUrls = [];


  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if(this.fileUrls == null || this.fileUrls.length == 0 ){
      alert("Please Select Files");
      return;
    }
    this.databaseServ.create({
      title: this.title,
      description: this.description,
      sem: this.selectSem,
      branch: this.selectBranch,
      type: this.selectType,
      subject: this.selectSubject,
      fileUrls: this.fileUrls
    }, this.selectType);
    

     console.log(form);
     this.resetForm();

  }


 geturl($event){
  console.log($event);
  this.fileUrls.push($event);
  
 }

 resetForm(){

  this.title = "";
  this.description = "";
  this.selectSem = "";
  this.selectBranch = ""
  this.selectType = "";
  this.selectSubject = "";
  this.fileUrls = [];


 }


}
