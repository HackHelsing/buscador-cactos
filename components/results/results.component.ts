import { Component, Input } from '@angular/core';
import { IResults } from '../search/search.component';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {

    @Input() items: IResults[];

    ngOnInit(){
    }


}