
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from '../interceptors/auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: [
    // {
      // provide: HTTP_INTERCEPTORS,
      // useClass: AuthInterceptor,
      // multi: true
    // }
  ]
})
export class Feature1ModuleModule { }
