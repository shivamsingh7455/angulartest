import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { DataService } from './data.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'myapp';
  emp:Employee []=[];
  constructor(private empDS: DataService, private router:Router){}
    ngOnInit(): void 
  {
    this.loadEmployee();
    this.router.navigate(['/view']);
  }
  loadEmployee()
  {
      console.log("djk");
    return this.empDS.getEmployee().subscribe((data:any)=>{this.emp=data});
    
  }
}
