import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';
import {group} from '@angular/animations';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  id;
  post;
  
  constructor(private _Activatedroute: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.dataService.get(this.id).subscribe(result => {
      this.post = result;
    } );
  }

}
