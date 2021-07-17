import { Injectable } from '@angular/core';
import {ApiService} from './service/apiservice';
declare var SockJS;
declare var Stomp;

@Injectable()
export class MessageService {

  constructor() {
    this.initializeWebSocketConnection();
    /*api.get('a').forEach(
      (val) => {
        this.msg.push(val);
      }
    );*/
  }

  public stompClient;
  public msg = [];

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8082/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
