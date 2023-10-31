import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './models/enums/path';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: Path.mainPage, pathMatch: 'full' },
  { path: Path.mainPage, component: MainPageComponent },
  { path: '**', redirectTo: Path.mainPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
