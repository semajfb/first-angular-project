import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit  {  
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created';
  serverName= 'TestServer1' ;
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true ;
    }, 1000);
   }

  ngOnInit() {
  }
  
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any)
  {
    this.serverName = (<HTMLInputElement>event.target).value;  
  }
}
