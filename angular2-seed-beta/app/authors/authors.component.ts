import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="#author of authors">
                        {{author}}
                    </li>
                </ul>
                
                <input id="input-id" type="text" [value]="title" (input)="title = $event.target.value" /> 
                <input type="button" (click)="title = '' " value="Click" />
                <input type="text" [(ngModel)]="title" />
                <input type="text" bindon-ngModel="title" />
                `,
                 // Note: input-id has [value]="title" which binds title property to DOM element's value
                 //        button will have onClick event processing done in-line and assigns title property value of ''
                 // Avoid inline by using Directives [()] is property + event binding
    providers: [AuthorService]
})
export class AuthorsComponent {
    title = "Authors";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
} 