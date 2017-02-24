import {BrowserModule} from "@angular/platform-browser";
import {NgModule, ErrorHandler} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from '@angular/router'
import {HttpModule} from "@angular/http";
import {DataTableModule, DropdownModule} from "primeng/primeng";
import {HttpServices} from "./services/HttpServices";
import {AppComponent} from "./app.component";
import {ExceptionService} from "./exception/exceptionService";
import {GlobalExceptionHandler, LOGGING_ERROR_HANDLER_OPTIONS} from "./exception/globalExceptionHandler";
import {QueryComponent} from "./test/query/query.component";
import {TopCountriesComponent} from "./test/report/top10con/top10com.component";
import {Top10RunwayComponent} from "./test/report/top10runway/top10runway.component";
import {RTPCComponent} from "./test/report/runwaytypepercountry/rtpc.component";
import {MenuComponent} from "./test/menu/menu.component";

const appRoutes:Routes = [


  {path: 'rtpc', component: RTPCComponent},
  {path: 'topcon', component: TopCountriesComponent},
  {path: 'query', component: QueryComponent},
  {path: 'toprunway', component: Top10RunwayComponent},

]

@NgModule({
  declarations: [
    AppComponent
    , QueryComponent,
    TopCountriesComponent,
    Top10RunwayComponent,
    RTPCComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, DataTableModule, DropdownModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ExceptionService, HttpServices, {
    provide: ErrorHandler,
    useClass: GlobalExceptionHandler
  }
    , {
      provide: LOGGING_ERROR_HANDLER_OPTIONS,
      useValue: {
        rethrowError: false,
        unwrapError: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
