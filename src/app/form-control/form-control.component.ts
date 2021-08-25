import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  message:string;
  myControl:FormGroup;

  constructor() { 

    this.message = "";
    this.myControl = new FormGroup({});

  }

  ngOnInit() {

    this.message = "please select button";
    this.myControl = new FormGroup({
      name: new FormControl(''),
      number: new FormControl(0),
      email: new FormControl(''),
      check: new FormControl(true),
      radio: new FormControl('female'),
      select1: new FormControl('none'),
      select2: new FormControl(['linux',]),
      slider1: new FormControl(0),
      slider2: new FormControl(0),
      picker1: new FormControl(new Date()),
    });

  }

  click(){
    this.message = JSON.stringify(this.myControl.value);
  }

}
