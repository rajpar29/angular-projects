import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-browse-study',
  templateUrl: './browse-study.component.html',
  styleUrls: ['./browse-study.component.css']
})
export class BrowseStudyComponent implements OnInit {
  browseStudyList: any = [];

  constructor( public dataService: DatabaseService ) { }

  ngOnInit() {

    this.browseStudyList = [];
    this.browseStudyList = this.dataService.getStudyMaterialList();
    console.log(this.browseStudyList);
  }

}
