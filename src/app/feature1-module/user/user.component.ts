import { Component, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { RemoteDataService } from '../services/remote-data.service';
import { Response } from '../models/response';
import { User } from '../models/User';

import { interval } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  private usuarios: Array<User>;
  private responseLocal: Response;

  constructor(private log: LoggerService,  private remoteDataService: RemoteDataService) {
    log.setFileName('user.component.ts');
    log.log('Iniciado!!');
  }

  ngOnInit() {
    this.remoteDataService.getUserData().subscribe(response => {
      this.responseLocal = response;
      this.usuarios = this.responseLocal.data;
    },
    error => {
      this.log.log('Ocurrió un fallo!!!!!',error);
    });

    // this.enviarData();

    // this.pruebaObservable();
  }

  // pruebaObservable(){
  //   const seconds = interval(1000);
  //   let time: string;
  //   seconds.subscribe(n => {
  //     time = `Pasando ${n} segundos desde la suscripción`;
  //     //this.log.log(time);
  //   });


  // }

  // enviarData(){
  //   let u = new User(undefined, 'Jose Julian', 'Ariza', 'https://prometheus.io/assets/prometheus_logo_grey.svg');
  //   this.remoteDataService.setRemoteData(u).subscribe(response => {
  //     this.log.log('respuesta post: ',response);
  //   },
  //   error => {
  //     this.log.log('Ocurrió un al hacer el post!!!!!', error);
  //   });
  // }


  // ngDoCheck(){
    /*
    if (this.responseLocal !== undefined && this.responseLocal.data !== undefined){
      this.log.log('Tengo data!!!!');
    } else {
      this.log.log('Aun no llega data');
    }
    */
  }

