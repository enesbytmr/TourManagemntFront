import { Component, OnInit } from "@angular/core";
import { Tour } from "../tour";
import { TOURS } from "../tour-data";

@Component({
  selector: "app-tour-list",
  templateUrl: "./tour-list.component.html",
  styleUrls: ["./tour-list.component.scss"],
})
export class TourListComponent implements OnInit {
  tours: Tour[];

  // Breadcrumb öğeleri
  breadCrumbItems: Array<{}>;

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Nazox" },
      { label: "Tour List", active: true },
    ];
    this._fetchData();
  }

  private _fetchData() {
    this.tours = TOURS;
  }
}
