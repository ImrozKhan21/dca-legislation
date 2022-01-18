import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {forkJoin} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { CinchyConfig } from '@cinchy-co/angular-sdk';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private environmentConfig : any;
 // fullScreenHeight;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  //  window.addEventListener('message', this.receiveMessage, false);
  }

  get envConfig(): CinchyConfig {
    return this.environmentConfig;
  }

  loadConfig() {
    return forkJoin(this.getEnvUrl());
  }

  getEnvUrl() {
    const url = `${this.baseUrl}assets/config.json`;
    /*    const headers = new HttpHeaders({
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
        })*/
    return this.http
      .get<any>(url).pipe(
        tap(config => {
          this.environmentConfig = config
        }));
  }

/*  receiveMessage(event) {
    if (event.data.toString().startsWith('[Cinchy][innerHeight]')) {
      this.fullScreenHeight = parseInt(event.data.toString().substring(21), 10) + 4;
      console.log('receiveMessage  IF', this.fullScreenHeight)
      localStorage.setItem('fullScreenHeight', this.fullScreenHeight.toString());
      const elements = document.getElementsByClassName('full-height-element');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < elements.length; i++) {
        setTimeout(() => {
          if(window.location !== window.parent.location){
            elements[i]['style'].height = this.fullScreenHeight + 'px';
          }
        }, 500)
      }
    }
  }*/
}
