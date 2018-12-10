import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public productList:any = [];
	public loginUser;
	public deleteModalOpen = false;
	public selectedProduct = 0;

	constructor(private router: Router) { }

	ngOnInit() {
	  	let userData = localStorage.getItem('loginUser');
	  	if(userData){
	  		this.loginUser = JSON.parse(userData);
	  		if(this.loginUser.permissions.indexOf('product-list') > -1){
	  			let productList = localStorage.getItem('productList');
				if(productList){
					this.productList = JSON.parse(productList);
				}
	  		}else{
				this.router.navigate(['/']);
	  		}
	  	}
	}

	deleteProduct(index){
		this.selectedProduct = index;
		this.deleteModalOpen = true;
	}

	deleteSubmit(){
		this.productList.splice(this.selectedProduct, 1);
		localStorage.removeItem('productList');
		localStorage.setItem('productList', JSON.stringify(this.productList));
		this.closeModal();
	}

	closeModal() {
		this.deleteModalOpen = false;
	}


}
