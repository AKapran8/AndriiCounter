import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { CounterService } from "src/app/services/counter.service";

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.css']
})
export class AddCountComponent implements OnInit, OnDestroy {
  public totalCount: number = 0;
  private _countSub: Subscription;
  constructor( private _counterService: CounterService, ) {}


  ngOnInit() {
    this._counterService.getCounts();
    this._countSub = this._counterService.getUpdatedCountsListener().subscribe((val: any[]) => {
      this.totalCount = val.length;
    })
  }

  onAddCount() {
    this._counterService.addCount(new Date().toString());
  }

  ngOnDestroy(){
    this._countSub.unsubscribe();
  }
}
