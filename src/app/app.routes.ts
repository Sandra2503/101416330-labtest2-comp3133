import { Routes } from '@angular/router';
import {MissionDetailsComponent} from "./mission-details/mission-details.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'launch/:id', component: MissionDetailsComponent}
  ];[];
