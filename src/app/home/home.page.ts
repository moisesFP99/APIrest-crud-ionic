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
    // this.readData();
    // this.updateData();
    this.deleteData();
  }

  createData() {
    const data: any = {
      title: 'Moises',
      body: 'Teste',
      userId: 10
    };

    this.apiService.createData(data).subscribe(data => {
      console.log(data);
    });
  }

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  }

  updateData() {
    const data: any = {
      id: 1,
      title: 'YouTube',
      body: 'Canal',
      userId: 10
    };

    this.apiService.updateData(data).subscribe(data => {
      console.log(data);
    });
  }

  deleteData() {
    this.apiService.deleteData().subscribe(data => {
      console.log(data);
    });
  }

}
