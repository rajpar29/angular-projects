import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  browseList: any = [];

  constructor( public dataService: DatabaseService ) { }

  ngOnInit() {

    this.browseList = [];
    this.browseList = this.dataService.getAssignmentList();
    console.log(this.browseList);
  }

}
