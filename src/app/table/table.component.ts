import { Component } from '@angular/core';
// import UserData from '../../assets/user.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
// user_data:any=UserData;
user_data:any[]=[];


constructor(private http:HttpClient){
      this.http.get<any[]>('./assets/user.json').subscribe((data)=>{
          this.user_data=data;
console.log(this.user_data)
})

  
    // console.log(this.user_data);
}


displayedColumns:string[]=['id','firstname','lastname','email','state'];



}
