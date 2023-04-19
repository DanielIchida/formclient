import { Component , OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent {

  data: any;

  constructor(private dataService: ClientServiceService) { }

  ngOnInit() {
    this.dataService.readProduct().subscribe((data) => {
      console.log(data);
      this.data = data.result.result;
    });
  }

}
