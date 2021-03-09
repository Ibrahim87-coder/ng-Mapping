import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = ' Google Maps ';
  data=[];
  lat = 34.426731;
  lng = 35.842400;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

    this.http.get('https://morning-depths-49872.herokuapp.com/')
 .subscribe((apiResponse:[])=>{
 this.data = apiResponse;
 })

}

}
