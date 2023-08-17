import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContentComponent } from './resume-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [ResumeContentComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatLegacyListModule,
    HeaderModule,
  ],
})
export class ResumeContentModule {}
