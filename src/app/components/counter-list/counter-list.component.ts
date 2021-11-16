import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { CounterService } from 'src/app/services/counter.service';
import { ICount } from 'src/app/interfaces/ICount.interface';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit, OnDestroy {
  public totalCount: number = 0;
  public counts: ICount[] = [];

  private _countsSub: Subscription;

  constructor(private _counterService: CounterService) { }

  ngOnInit() {
    this._counterService.getCounts();
    this._countsSub = this._counterService.getUpdatedCountsListener().subscribe((val: ICount[]) => {
      this.counts = val;
      this.totalCount = val.length;
    })
  }

  ngOnDestroy() {
    this._countsSub.unsubscribe();
  }

}
