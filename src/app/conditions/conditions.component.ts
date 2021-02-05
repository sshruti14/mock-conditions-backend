import { Component, OnInit } from '@angular/core';
import { Conditions } from '../conditions';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  conditions: Conditions[]=[];
  jsonDataResult : any;

  //products:  any  = (data  as  any).default;

   constructor(private http: HttpClient) { }

  ngOnInit() {
     this.getConditions();
   }

   getConditions(): void {
    this.http.get('assets/data/conditions.json').subscribe((res) => {
    this.conditions = res as Conditions [];
    });
   }




}
