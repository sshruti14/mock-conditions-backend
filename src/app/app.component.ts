import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as data from '../assets/data/conditions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'conditional-ui-app';
  conditionalData: any = [];

 // products: any = (data as any).default;

ngOnInit() {
  //console.log(data);
}


}
