import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  id;
  post;
  
  constructor(private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
	this.post = new BlogComponent().items.find(p => p.id == this.id);
  }

}
