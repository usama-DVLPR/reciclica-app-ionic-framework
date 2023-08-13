import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  goToPickupCalls() {
    this._router.navigate(['/pickup-calls']);
  }
  goToPickupCall() {
    this._router.navigate(['/pickup-call']);
  }
}
