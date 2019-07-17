import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Search } from '../Search';
import { SEARCH } from '../Search-data';

@Component({
  selector: 'app-wheather-values',
  templateUrl: './wheather-values.component.html',
  styleUrls: ['./wheather-values.component.css']
})
export class WheatherValuesComponent implements OnInit {
	 private CurrentSearchValue : Search;
	 private pastSearchValue : Search[] = []

  constructor(private searchservice : SearchService) { }

  ngOnInit() {
  }
getClick(SearchElement : string): void {
	this.CurrentSearchValue = this.searchservice.getClick(SearchElement);
	this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
	this.pastSearchValue.push(this.CurrentSearchValue);
}
}
