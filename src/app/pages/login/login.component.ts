import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public userDetails : any = [{
		"name" : "Rishabh Agrawal", 
		"permissions" : [
				"category-list",
				"category-edit",
				"category-create",
				"category-delete",
				"product-list",
				"product-edit",
				"product-create",
				"product-delete",
			]
		}, {
			"name" : "Mayank Agrawal", 
			"permissions" : [
				"category-list",
				"category-edit",
			]
		}, {
			"name" : "Shikha Agrawal", 
			"permissions" : [
				"category-list",
				"category-create",
				"product-list",
				"product-create",
			]
		},{
			"name" : "Aman Agrawal", 
			"permissions" : []
		}
	];
	public isFormSubmit : boolean = false;
	public selectedUser = "";
	constructor(private router: Router) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
		if(userData){
			let loginUser = JSON.parse(userData);
			if(loginUser['permissions'].indexOf('product-list') > -1){
				this.router.navigate(['/product/list/']);
			}else if(loginUser['permissions'].indexOf('category-list') > -1){
				this.router.navigate(['/category/list/']);
			}else{
				this.router.navigate(['/no-permission/']);
			}
		}
	}

	login() {
		this.isFormSubmit = true;
		this.selectedUser;
		if(this.selectedUser){
			localStorage.setItem('loginUser',JSON.stringify(this.selectedUser));
			if(this.selectedUser['permissions'].indexOf('product-list') > -1){
				this.router.navigate(['/product/list/']);
			}else if(this.selectedUser['permissions'].indexOf('category-list') > -1){
				this.router.navigate(['/category/list/']);
			}else{
				this.router.navigate(['/no-permission/']);
			}
		}
	}

}
