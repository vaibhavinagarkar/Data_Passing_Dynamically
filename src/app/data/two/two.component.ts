import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Input() posts = [];
  @Input() public posts = [] as any;

}
