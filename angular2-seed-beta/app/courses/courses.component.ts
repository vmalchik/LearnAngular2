import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AuthorsComponent} from '../authors/authors.component';
import {AutoGrowDirective} from '../directives/auto-grow/auto-grow.directive';
import {StarComponent} from '../star/star.component';

@Component({
    selector: 'courses', // CSS selector for host HTML element eg. <courses>
    template: `
                <h2>Courses</h2>
                {{title}}
                <input type="text" autoGrow />
                <ul>
                    <li *ngFor="#course of courses">
                        {{course}}
                    </li>
                 </ul>
                 <authors></authors>
                 <star></star>`
                , // Rendered into DOM. Note: ngFor is a directive that extends HTML and adds behavior
    providers: [CourseService], // tells angular how to inject service for DI
    directives: [AuthorsComponent, AutoGrowDirective, StarComponent]
})
export class CoursesComponent{
    title: string = "The title of coureses page"; // Note: string type can be infered and is not necessary 
    courses;

    constructor(courseService: CourseService) { // Note: naming convention. CouseService component will be created using DI which is provided by framework
       // console.log(courseService.getCourses());
       this.courses = courseService.getCourses();
    }

}