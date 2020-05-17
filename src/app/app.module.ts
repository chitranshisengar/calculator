import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
