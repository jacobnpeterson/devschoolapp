import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { tags } from '../../assets/data/tags';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})

export class AutocompleteComponent implements OnInit {
  public model: any;

  constructor() { }

  ngOnInit() {
  }

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : tags.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  tagValue: string;

  @Output() sendTag = new EventEmitter<string>();

  // 1. Erase input text
  // 2. Add tag badge with input text
  onEnter() {

    // 1. Add tag badge below with input text
    this.sendTag.emit(this.model);

    // 2. Erase input text
    this.model = null;
    
  }

}
