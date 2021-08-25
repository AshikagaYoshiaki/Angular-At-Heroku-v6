import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  title:string;
  message:string;


  constructor() { 
    this.title = '';
    this.message = '';
  }

  ngOnInit(): void {

    this.title = 'Hi App';
    this.message = 'this is the first VSC'; 

  }

}
