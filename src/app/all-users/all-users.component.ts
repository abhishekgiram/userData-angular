import { Component, OnInit } from '@angular/core';
import { AllDataFromApiService } from '../all-data-from-api.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersData:any=[];
  constructor(
    public allData:AllDataFromApiService,

  ) { }

  ngOnInit() {
this.allData.allUsers().subscribe(res=>{
  this.usersData=res;
})
  }

}