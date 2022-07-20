import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component'
import { LoadJsonDataService } from './services/load-json-data.service';
import { UpdateJsonDataService } from './services/update-json-data.service';
import { HttpClientModule } from '@angular/common/http'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [LoadJsonDataService,UpdateJsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
