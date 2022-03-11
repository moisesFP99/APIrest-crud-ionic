import { ApiService } from './../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {
    // this.createData();
    this.readData();
    // this.updateData();
    // this.deleteData();
  }

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }

}
