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
  showPosts:boolean=true;
  selectedUser:any=[];
  postsOfUser:any=[];
  photosByUser:any=[];
  photosByAblum:any=[];
  showPhoto:boolean=false;
  
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
    this.showPosts=true;
    this.showPhoto=false;
    this.selectedUser=[];
    this.postsOfUser=[];
  }

  posts(id){
    console.log(id);
    this.allData.postsByUser().subscribe((posts)=>{
        console.log(posts);
      //  posts.forEach((element)=>{
      //     if(element.userId === id){
      //         this.postsOfUser.push(element);
      //     }
      //   })
      this.postsOfUser = posts.filter((value)=>{
        return value.userId===id;
      })
      console.log(this.postsOfUser)
    })
    this.showPosts=false;
  }

  // photos(id){
  //   console.log(id);
  //   this.allData.albums().subscribe((res)=>{
  //   //  console.log(res);
  //     this.photosByUser= res.filter((photoid)=>{
  //       return photoid.userId===id
  //     })
  //     console.log(this.photosByUser)

  //     //this.photosByAblum= this.photosByUser.filter((photoata)=>{
  //      // return photoata.albumId==photoAlbumId
  //    // })
  //     this.showPhoto=true;
  //     this.showuserList=true;
  //     this.showPosts=true;
  //   })
   
  // }

}