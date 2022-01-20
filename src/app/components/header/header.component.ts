import {Component, OnInit} from '@angular/core';
import {IAvatar} from "../../models/common.model";
import {ApiCallsService} from "../../services/api-calls.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  avatars: IAvatar[];

  constructor(private apiCallsService: ApiCallsService) {
  }

  async ngOnInit() {
    this.avatars = await this.apiCallsService.getDataStewards().toPromise();
  }

}
