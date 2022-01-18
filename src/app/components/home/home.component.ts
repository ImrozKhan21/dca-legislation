import {Component, OnInit} from '@angular/core';
import {ApiCallsService} from "../../services/api-calls.service";
import {ILegislation} from "../../models/common.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  legislationData: ILegislation[];
  filteredLegislationData: ILegislation[];
  paginatedLegislationData: ILegislation[];
  legislationVal: any;
  currentPage = 0;
  pageSize = 8;
  allKeys: (keyof ILegislation)[];

  constructor(private apiCallsService: ApiCallsService) {
  }

  ngOnInit(): void {
    this.getLegislationData();
  }

  async getLegislationData() {
    this.legislationData = await this.apiCallsService.getLegislation().toPromise();
    this.filteredLegislationData = [...this.legislationData];
    this.setPaginateData();
    this.setKeys();
  }

  setKeys() {
    this.allKeys = (Object.keys(this.legislationData[0]) as (keyof ILegislation)[]).filter(
      keyItem => keyItem !== 'Summary' && keyItem !== 'Title'
    );
  }

  filterLegislation(event: any) {
    let query = event.query;
    this.filteredLegislationData = this.legislationData.filter(legislation => {
      return legislation['Title'].toLowerCase().indexOf(query.toLowerCase()) == 0;
    });
  }

  reset() {
    this.filteredLegislationData = [...this.legislationData];
    this.setPaginateData();
  }

  setPaginateData(event?: any) {
    console.log('event', event)
    const startPoint = this.currentPage * this.pageSize;
    const endPoint = startPoint + this.pageSize;
    this.paginatedLegislationData = [...this.filteredLegislationData].slice(startPoint, endPoint);
  }

  paginate(event: any) {
    console.log('EVENT PAGE', event);
    this.currentPage = event.page;
    this.setPaginateData();
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

}
