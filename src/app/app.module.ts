import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./to-do-list/home/home.component";
import {PanelModule} from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ListsService } from './to-do-list/lists-service';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { DetailsComponent } from './to-do-list/details/details.component';
import { DialogModule } from 'primeng/dialog';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DetailsComponent
    ],
    providers: [ListsService],
    bootstrap: [AppComponent],
    imports: [
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PanelModule,
        TableModule,
        CheckboxModule,
        PaginatorModule,
        DialogModule
    ]
})
export class AppModule { }
