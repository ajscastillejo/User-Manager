import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private fileName: string;

  constructor() { }

  setFileName(fileName:string){
    this.fileName = fileName;
  }

  log(...msg: any[]){
    let fechaFormateada = new Date();


    console.log(`[${fechaFormateada}]  ${this.fileName}: ${msg[0]} `, msg[1] == undefined ? '' : msg[1] );
  }
}
