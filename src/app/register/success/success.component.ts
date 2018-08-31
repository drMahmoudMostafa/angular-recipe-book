import { RouteAnimations } from './../../shared/route-animation';
import { AuthService } from './../auth.service';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  loginMode: string;
  userName: string;
  constructor(private authServ: AuthService) { }

  ngOnInit() {
    this.loginMode = this.authServ.loginMode;
    this.userName = this.authServ.userName;
  }

}
