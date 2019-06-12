import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css']
})
export class BrowseItemComponent implements OnInit {

  @Input() browseItem;

  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToDetail() {
    this.router.navigate(['/id',{'id': this.index}]);
   // console.log("navigate");
    
}


}
