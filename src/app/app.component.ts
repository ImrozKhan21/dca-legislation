import {Component, OnInit} from '@angular/core';
import {Cinchy, CinchyService} from "@cinchy-co/angular-sdk";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs';
import {IAvatar} from "./models/common.model";
import {ApiCallsService} from "./services/api-calls.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dca-private';
  avatars: IAvatar[];

  constructor(private apiCallsService: ApiCallsService) {
  }

  async ngOnInit() {
    this.avatars = await this.apiCallsService.getDataStewards().toPromise();
  }
}
