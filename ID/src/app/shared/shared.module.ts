import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './componentes/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './componentes/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoadingService } from './services/loading/loading.service';
import { LoadingComponent } from './services/loading/loading.component';

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

const classesToInclude = [
  AdminLayoutComponent,
  AuthLayoutComponent,
  LoadingComponent
];

@NgModule({
  declarations: [classesToInclude, LoadingComponent],
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
    LoadingService
  ],
  entryComponents: [
    LoadingComponent
  ]
})
export class SharedModule { }
