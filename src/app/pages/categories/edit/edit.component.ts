import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	public categoryName: string = "";
	public isFormSubmit = false;
	public categoryList:any = [];
	public indexNo = 0;

	constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
	  	if(userData){
	  		let loginUser = JSON.parse(userData);
	  		if(loginUser.permissions.indexOf('category-edit') > -1){
	  			this.route.params.subscribe(
					(params) => {
						let categoryId = params.id;
						let categoryList = localStorage.getItem('categoryList');
						if(categoryList){
							this.categoryList = JSON.parse(categoryList);
							this.categoryList.forEach((val, key)=>{
								if(val.id == categoryId){
									this.indexNo = key;
									this.categoryName = val.name;
								}
							})
						}
					}
				);
	  		}else{
	  			this.router.navigate(['/category/list/']);
	  		}
	  	}
	}

	submitForm() {
		this.isFormSubmit = true;
		if(this.categoryName){
			this.categoryList[this.indexNo].name = this.categoryName;
			localStorage.setItem('categoryList', JSON.stringify(this.categoryList));
			this.categoryName = "";
			this.isFormSubmit = false;
			this.router.navigate(['/category/list/']);
		}
	}
}
