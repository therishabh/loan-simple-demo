import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	public productName: string = "";
	public isFormSubmit = false;
	public productList:any = [];
	public indexNo = 0;

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
	  	if(userData){
	  		let loginUser = JSON.parse(userData);
	  		if(loginUser.permissions.indexOf('product-edit') > -1){
	  			this.route.params.subscribe(
					(params) => {
						let productId = params.id;
						let productList = localStorage.getItem('productList');
						if(productList){
							this.productList = JSON.parse(productList);
							this.productList.forEach((val, key)=>{
								if(val.id == productId){
									this.indexNo = key;
									this.productName = val.name;
								}
							})
						}
					}
				);
	  		}else{
	  			this.router.navigate(['/product/list/']);
	  		}
	  	}
	}

	submitForm() {
		this.isFormSubmit = true;
		if(this.productName){
			this.productList[this.indexNo].name = this.productName;
			localStorage.setItem('productList', JSON.stringify(this.productList));
			this.productName = "";
			this.isFormSubmit = false;
			this.router.navigate(['/product/list/']);
		}
	}

}
