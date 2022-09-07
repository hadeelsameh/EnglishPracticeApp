import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
  {path:'practice',component:PracticeComponent},
  {path:'rank', component:RankingComponent},
  {path:'**' , redirectTo:'/practice' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PracticeComponent,RankingComponent]
