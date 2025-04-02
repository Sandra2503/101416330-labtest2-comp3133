import { Component } from '@angular/core';
import { MissionListComponent } from '../mission-list/mission-list.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  imports: [MissionListComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public year: string = "";

  passData(year: string) {
    this.year = year;
  }
}
