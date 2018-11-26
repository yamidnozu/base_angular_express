import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoaderComponent } from '../../../../src/app/shared/services/app-loader/app-loader.component';
import { AppLoaderService } from '../../../../src/app/shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private loader: AppLoaderService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Cerrar ventana')
    // this.loader.close();
  }

  goToMainDash() {
    this.loader.open('Hola');
    // this.router.navigateByUrl('/home');
  }

}
