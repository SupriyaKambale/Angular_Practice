import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-ngstyle",
  templateUrl: "./ngstyle.component.html",
  styleUrls: ["./ngstyle.component.css"],
})
export class NgstyleComponent implements OnInit {
  colorVal: string = "blue";

  peoples: any[] = [
    { name: "Jack", country: "UK" },
    { name: "Sumit", country: "USA" },
    { name: "Anup", country: "HK" },
    { name: "Harmany", country: "UK" },
    { name: "Surya", country: "USA" },
  ];
  constructor() {}

  ngOnInit() {}
}
