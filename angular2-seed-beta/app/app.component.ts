import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
//import {AuthorsComponent} from './authors/authors.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular</h1>
        <courses></courses>`,
    directives: [CoursesComponent] // Find directive or component used inside this template (extend control to DOM)
})
export class AppComponent {
   

 }