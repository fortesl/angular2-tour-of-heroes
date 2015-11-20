/**
 * Created by lfortes on 11/20/2015.
 */

import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
    id: number;
    name: String;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label><input [(ng-model)]="hero.name" placeholder="name"></div>
        `,
    directives: [FORM_DIRECTIVES]
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}

bootstrap(AppComponent);
