import {Component} from 'angular2/core';

@Component({
    selector: 'star',
    template: `
        <div>
            This is my star...
           <span (click)="onStarClick()" class="glyphicon" [class.glyphicon-star-empty]="isEmptyStar" [class.glyphicon-star]="!isEmptyStar"></span>
        </div>
        `,
        //<span class="glyphicon" [class.glyphicon-star-empty glyphicon-star]="isEmptyStar"></span>
        //<span class="glyphicon glyphicon-star-empty"></span>
        //<span class="glyphicon glyphicon-star" (click)="onStarClick()"></span>
})
export class StarComponent {
    isEmptyStar:boolean = true;

    onStarClick() {
        this.isEmptyStar = this.isEmptyStar ? false : true;
    }

}