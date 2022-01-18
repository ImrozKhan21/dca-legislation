import {Component, OnInit} from '@angular/core';
import {Cinchy, CinchyService} from "@cinchy-co/angular-sdk";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dca-private';

  constructor() {
  }

  ngOnInit() {
  }
}
