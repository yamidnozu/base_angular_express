import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private loader: LoadingService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Cerrar ventana')
    this.loader.close();
  }

  goToMainDash() {
    this.loader.open();
    this.router.navigateByUrl('/home');
  }

}
