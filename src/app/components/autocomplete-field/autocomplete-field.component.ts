import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "autocomplete-field",
  templateUrl: "./autocomplete-field.component.html",
  styleUrls: ["./autocomplete-field.component.css"]
})
export class AutocompleteFieldComponent implements OnInit {
  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  @Input() items: string[];

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
