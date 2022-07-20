import { Component, OnInit } from '@angular/core';
import {LoadJsonDataService} from '../services/load-json-data.service';
import {UpdateJsonDataService} from '../services/update-json-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data1:any;
  price:any;

  constructor(private jsonData:LoadJsonDataService,private updateJson:UpdateJsonDataService) { }

  ngOnInit(): void {
    this.loadJsonData();
  }


  onChange(event:any) {
    this.price=event.target.value;
    console.log(this.price);

  }

  loadJsonData(){

    this.jsonData.getJsonData().subscribe(data =>{
      this.data1 = data;
    });

  }

  updateData(Name : string){
    var p = Number(this.price);
    this.updateJson.updateJsonData(Name,p).subscribe(data =>{

      window.alert('Price Update Successfully !!');
      window.location.reload();


    })
  }

}
