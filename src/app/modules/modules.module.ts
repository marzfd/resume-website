import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulesRoutingModule } from './modules.routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ModulesRoutingModule],
  exports: [RouterModule],
})
export class ModulesModule {}
