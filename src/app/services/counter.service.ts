import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { ICount } from "../interfaces/ICount.interface";

@Injectable({
  providedIn: "root",
})

export class CounterService {
  private _counts: ICount[] = [];
  private _updatedCounts = new Subject<ICount[]>();

  constructor(private _http: HttpClient) { }

  public getCounts() {
    this._http
      .get<{ message: string; counts: any }>("http://localhost:3000/counts")
      .pipe(map((countData) => {
        return countData.counts.map((count) => {
          return {
            date: count.date,
            id: count._id,
          }
        })
      }))
      .subscribe((val) => {
        this._counts = val;
        this._updatedCounts.next([...this._counts]);
      });
  }

  public getUpdatedCountsListener() {
    return this._updatedCounts.asObservable();
  }

  public addCount(date: string) {
    const count: ICount = {
      id: null,
      date: date,
    };

    this._http
      .post<{ message: string, postId: string }>("http://localhost:3000/counts", count)
      .subscribe((resData) => {
        const id = resData.postId;
        count.id = id;
        this._counts.push(count);
        this._updatedCounts.next([...this._counts]);
      })
  }

}
