import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public temp:AppComponent) { }
  

  ngOnInit() {
  }
remove(i)
{
    this.temp.emp.splice(i,1);
}
}
