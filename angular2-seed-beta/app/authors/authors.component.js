System.register(['angular2/core', './author.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, author_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.title = "Authors";
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "<h2>{{title}}</h2>\n                <ul>\n                    <li *ngFor=\"#author of authors\">\n                        {{author}}\n                    </li>\n                </ul>\n                \n                <input id=\"input-id\" type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" /> \n                <input type=\"button\" (click)=\"title = '' \" value=\"Click\" />\n                <input type=\"text\" [(ngModel)]=\"title\" />\n                <input type=\"text\" bindon-ngModel=\"title\" />\n                ",
                        // Note: input-id has [value]="title" which binds title property to DOM element's value
                        //        button will have onClick event processing done in-line and assigns title property value of ''
                        // Avoid inline by using Directives [()] is property + event binding
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map