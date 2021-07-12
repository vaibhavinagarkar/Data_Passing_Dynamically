import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredTitle='';
  enteredContent='';
  enteredAddress='';
  enteredContact='';

  @Output()postCreated = new EventEmitter();

  onAddPost(){
    const post={title:this.enteredTitle,content:this.enteredContent , address:this.enteredAddress,contact:this.enteredContact};
    this.postCreated.emit(post);

    }
  }

