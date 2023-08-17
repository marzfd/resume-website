import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatLegacyListModule } from '@angular/material/legacy-list';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterLink, MatLegacyListModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
