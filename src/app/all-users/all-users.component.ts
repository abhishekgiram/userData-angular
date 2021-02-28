import { Component, OnInit } from '@angular/core';
import { AllDataFromApiService } from '../all-data-from-api.service';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  usersData:any=[];
  showuserList:boolean=true;
  selectedUser:any=[];
  constructor(
    public allData:AllDataFromApiService,

  ) { }

  ngOnInit() {
this.allData.allUsers().subscribe(res=>{
  console.log(res);
  this.usersData=res;
})
}

  Details(id){
    this.showuserList=false;
    console.log("this is pressed", id);
    this.usersData.forEach((element)=>{
     // console.log(element.id)
     if(element.id==id){
       this.selectedUser.push(element);
     }
    })
    console.log(this.selectedUser);
  }
  gotoUserList(){
    this.showuserList=true;
    this.selectedUser=[];
  }

}