import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //In this component, we would like you to display all the selected element's data
  //This should be - position, name, weight and symbol
}
