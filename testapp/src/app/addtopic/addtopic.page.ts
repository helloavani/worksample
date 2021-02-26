import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.page.html',
  styleUrls: ['./addtopic.page.scss'],
})
export class AddtopicPage implements OnInit {
  lines:any;
  constructor() { }

  ngOnInit() {
  }
TopicDetailChange(data){
  console.log(data,"per second");
this.lines = data.split(/[,-;:|\n.{}?!()]+/);

}
}
