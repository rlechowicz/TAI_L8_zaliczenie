import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items: any;
  filterText: string;

  constructor(private dataService: DataServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getAll().subscribe(result => {
      this.items = result;
    } );
	this.route.queryParams.subscribe(params => {
      this.filterText = params['title'];
    } );
  }
  
  setQuery() {
	this.router.navigate(['blog'], {queryParams: {title: this.filterText}});
  }

}
