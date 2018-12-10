import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

	public categoryName:string = "";
	public isFormSubmit:boolean = false;
	public categoryList:any = [];
	constructor(private router: Router) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
	  	if(userData){
	  		let loginUser = JSON.parse(userData);
	  		if(loginUser.permissions.indexOf('category-create') > -1){
				let categoryList = localStorage.getItem('categoryList');
				if(categoryList){
					this.categoryList = JSON.parse(categoryList);
				}
	  		}else{
	  			this.router.navigate(['/category/list/']);
	  		}
	  	}
	}

	submitForm() {
		this.isFormSubmit = true;
		if(this.categoryName){
			let obj = {
				id : 1,
				name : this.categoryName
			}
			if(this.categoryList.length > 0){
				obj.id = this.categoryList.length + 1;
			}
			this.categoryList.push(obj);
			localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
			this.categoryName = "";
			this.isFormSubmit = false;
			this.router.navigate(['/category/list/']);
		}
	}

}
