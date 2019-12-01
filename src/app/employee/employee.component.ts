import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = [];
  constructor(private service : DataService) { }

  ngOnInit() {

    this.service
    .Select()
    .subscribe( response =>
      {
        if( response['status'] === 'success')
        {
          this.employee = response['data'] as any[];
        }else{
          console.log("Error : ",response['error'])
        }
      })


  }

}
