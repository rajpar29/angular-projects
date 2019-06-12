import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-study-item',
  templateUrl: './browse-study-item.component.html',
  styleUrls: ['./browse-study-item.component.css']
})
export class BrowseStudyItemComponent implements OnInit {

  @Input() browseItem;

  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToDetail() {
    this.router.navigate(['/bid',{'bid': this.index}]);
   // console.log("navigate");
    
}

}
