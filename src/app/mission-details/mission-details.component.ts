import { Component } from '@angular/core';
import { SpacexApiService } from '../spacex-api.service';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../model/mission';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mission-details',
  imports: [MatCardModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {

  public id: number = 0;

  public data!: Mission;

  constructor(private route: ActivatedRoute, private api: SpacexApiService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id')!;
      this.id = Number(id);
      this.api.getLaunchbyId(this.id).subscribe({
        next: result => {
          this.data = result;
        },
        error: error => {
          console.log('Error:', error);
        }
      })
    });
  }
}
