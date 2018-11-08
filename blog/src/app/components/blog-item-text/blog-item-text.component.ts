import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css']
})
export class BlogItemTextComponent implements OnInit {

  @Input('text') text: string;
  @Input('id') id;
  
  constructor() { }

  ngOnInit() {
  }

}
