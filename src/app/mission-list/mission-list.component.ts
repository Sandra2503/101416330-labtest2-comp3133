import { Component, Input } from '@angular/core';
import {  MatCardModule } from "@angular/material/card";
import { SpacexApiService } from '../spacex-api.service';
import { Router } from '@angular/router';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-mission-list',
  imports: [MatCardModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  public launches: Mission[] = [];
  @Input() year: string = '';

  constructor(private api: SpacexApiService, private router: Router) {  }

  ngOnInit() {
    this.getLaunches();
  }

  ngOnChanges(){
    
    this.getFiltered();
  }

  getLaunches() {
    this.api.getAllLaunches().subscribe({
      next: result => {
        this.launches = result;
      },
      error: error => {
        console.log('Error Occurred:', error);
      }
    })
  }

  go(id:  number) {
    this.router.navigate(['/launch/' + id])
  }

  getFiltered() {
    this.api.getFiltered(this.year).subscribe({
      next: result => {
        this.launches = result;
      }
    })
  }

}
