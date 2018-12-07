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
  item = {};

  constructor(private dataServ: DataServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    this.dataServ.get(this.id).subscribe(result => {
      console.log(result);
      this.item = result;
    })
  }

}
