import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

	public productName:string = "";
	public isFormSubmit:boolean = false;
	public productList:any = [];
	constructor(private router: Router) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
	  	if(userData) {
	  		let loginUser = JSON.parse(userData);
	  		if(loginUser.permissions.indexOf('product-create') > -1){
				let productList = localStorage.getItem('productList');
				if(productList){
					this.productList = JSON.parse(productList);
				}
	  		}else{
	  			this.router.navigate(['/product/list/']);
	  		}
	  	}
	}

	submitForm() {
		this.isFormSubmit = true;
		if(this.productName){
			let obj = {
				id : 1,
				name : this.productName
			}
			if(this.productList.length > 0){
				obj.id = this.productList.length + 1;
			}
			this.productList.push(obj);
			localStorage.setItem('productList', JSON.stringify(this.productList));
			this.productName = "";
			this.isFormSubmit = false;
			this.router.navigate(['/product/list/']);
		}
	}
}
