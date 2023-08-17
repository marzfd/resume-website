import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeContentComponent } from './resume-content/resume-content.component';

const modulesRoutes: Routes = [
  {
    path: '',
    component: ResumeContentComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./resume-content/resume-content.module').then(m => m.ResumeContentModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(modulesRoutes)],
  exports: [],
})
export class ModulesRoutingModule {}
