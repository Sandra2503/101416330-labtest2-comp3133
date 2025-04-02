import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mission} from "./model/mission";

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  private API_URL = "https://api.spacexdata.com/v3/launches";
  constructor(private httpClient : HttpClient) { }

  public getAllLaunches() : Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(this.API_URL);
  }

  public getLaunchbyId(id: number) : Observable<Mission> {
    return this.httpClient.get<Mission>(`${this.API_URL}/${id}`);
  }

  public getFiltered(year: string) : Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`${this.API_URL}?launch_year=${year}`);
  }
}