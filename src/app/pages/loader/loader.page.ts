import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.navigate();
    }, 3000);
  }

  navigate() {
    this._router.navigate(['/login']);
  }
}
