import { AuthGuard } from './shared/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterModule } from './register/register.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './app-main/shopping-list/shopping-list.service';
import { RecipesService } from './app-main/recipes/recipes.service';
import { DataHttp } from './shared/dataHttp.service';
import { AuthService } from './register/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RegisterModule,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipesService, DataHttp, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
