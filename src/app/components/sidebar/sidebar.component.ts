import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

	public userData;
	constructor(private router: Router) { }

	ngOnInit() {
		let userData = localStorage.getItem('loginUser');
		if(userData){
			this.userData = JSON.parse(userData);
		}
	}

}
