import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  public CompnyPhone:number=967066901;
  public username:string="";
  public password:string;
  public status:string="";

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  public onlogin(){
  	alert(this.username);
  	alert(this.password);
  	if(this.username=="sai" && this.password=="sai"){
  		this.status="Successfull Login";
  	}
  	else{
  		this.status="Failed to login";
  	}
  	
  }
}
