import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-browse-study-detail',
  templateUrl: './browse-study-detail.component.html',
  styleUrls: ['./browse-study-detail.component.css']
})
export class BrowseStudyDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private dataServ: DatabaseService, private router: Router) { }

  browseItem: any;
  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
       
        console.log( +params['bid']);
        this.browseItem = this.dataServ.getStudyItem(params['bid']);    
        if(this.browseItem == null || this.browseItem.length == 0) {
          this.router.navigate(['browse']);
        }  
        console.log(this.browseItem.fileUrls[0]);
          
      }
    );
  }

  fileClicked(url) {
    console.log(url);
    window.open(url);
    
  } 
}
