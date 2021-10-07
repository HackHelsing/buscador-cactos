import { Component } from "@angular/core";
import { dataBaseSearch } from './search.mock';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    searchInput: string = "";
    wordsArray: string[];
    results: IResults[] = [];
    showResults = false;

    constructor() { 
    }

    onSearch(){
        this.restartElements();
        const element = document.getElementById('input-search') as HTMLTextAreaElement;
        this.searchInput = element.value;
        this.wordsArray = this.searchInput.split(' ');
        this.findMatch(this.wordsArray);
    }

    findMatch(values: string[]){
        dataBaseSearch.forEach((e: IResults) => {
            const wordsDataBase = e.key_words.split(' ');
            const intersection = values.filter(element => wordsDataBase.includes(element));
            if(intersection.length > 0){
                this.results.push(e);
                this.showResults = true;
            }
        })
    }

    restartElements(){
        this.searchInput = "";
        this.wordsArray = [];
        this.results = [];
        this.showResults = false;
    }
}

export interface IResults{
    key_words: string,
    value: string,
}