import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item-image',
  templateUrl: './blog-item-image.component.html',
  styleUrls: ['./blog-item-image.component.css']
})
export class BlogItemImageComponent implements OnInit {

  @Input('image') image: string;

  constructor() { }

  ngOnInit() {
  }

}
