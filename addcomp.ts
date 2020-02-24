import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Employee } from '../Employee';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public temp:AppComponent, private router:Router) { }
name:string;
designation:string;
salary:number;
experience:number;
  ngOnInit() {
  }
    addEmployee()
    {
        this.temp.emp.push(new Employee(this.name,this.designation,this.salary,this.experience));
        this.router.navigate(['/view']);
    }
}
