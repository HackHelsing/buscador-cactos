import { Component, Input } from '@angular/core';
import { IResults } from '../search/search.component';

@Component({
    selector: 'app-result-item',
    templateUrl: './result-item.component.html',
    styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent {

    @Input() item: IResults;

    ngOnInit(){
        this.createItem();
        this.loadScript();
    }

    createItem(){
        const element = document.getElementById('content') as HTMLElement; 
        const appendElement = document.createElement('div');
        appendElement.innerHTML = this.item.value;
        appendElement.classList.add("element-style");
        console.log(appendElement.classList);
        element.appendChild(appendElement);
    }

    loadScript(){
        var script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= 'https://platform.twitter.com/widgets.js';
        document.body.appendChild(script);
    }
}