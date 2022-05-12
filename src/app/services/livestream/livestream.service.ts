import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class LivestreamService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  numbers:Observable<number> = interval(30);

  sendVideo(msg: any){
    this.socket.emit('stream', msg);
  }

  endStream(){
    this.socket.emit('end', "Stream ended");
  }

  getStream(){
    return new Observable<string>(observer => {
      this.socket.on('stream', (image: string) => {
        observer.next(image);
      });
    });
  }

  streamEndEvent(){
    return new Observable<string>(observer => {
      this.socket.on('end', (msg: string) => {
        observer.next(msg);
      });
    });
  }

  login(name: string, room: string) {
    this.socket.emit('login', ({ name, room }));
  }

}
