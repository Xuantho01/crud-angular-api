import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {DetailComponent} from './detail/detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '',
    component: ListComponent },
  {path: 'add',
    component: AddComponent },
   {path: 'detail/:id',
    component: DetailComponent},
  {
    path: 'book/:id/edit',
    component: UpdateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
