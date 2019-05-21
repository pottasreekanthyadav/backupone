import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	id:number=50;
name:string;
email:string;
password:string;
conformpassword:string;
gender:string;
country:string;
receiveNewsLetter:boolean;
status:string;
onRegClick(){

	console.log(this.name);
	console.log(this.email);
	console.log(this.password);
	console.log(this.conformpassword);
	console.log(this.gender);
	console.log(this.country);
	console.log(this.receiveNewsLetter);
	this.status="Succsfully Regu";
		console.log(this.status);

}
  


}
