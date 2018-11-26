import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './componentes/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './componentes/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './services/auth/auth.guard';

import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';
import { AppLoaderComponent } from './services/app-loader/app-loader.component';
import { AppLoaderService } from './services/app-loader/app-loader.service';

const classesToInclude = [
  AdminLayoutComponent,
  AuthLayoutComponent,
  AppLoaderComponent
];

@NgModule({
  declarations: [classesToInclude, AppLoaderComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
  ],
  providers: [
    AuthGuard,
    AppLoaderService
  ],
  entryComponents: [
    AppLoaderComponent
  ]
})
export class SharedModule { }
