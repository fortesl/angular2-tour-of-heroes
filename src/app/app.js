/**
 * Created by lfortes on 11/20/2015.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{hero.name}} details!</h2>\n        <div><label>id: </label>{{hero.id}}</div>\n        <div><label>name: </label><input [(ng-model)]=\"hero.name\" placeholder=\"name\"></div>\n        ",
            directives: [angular2_1.FORM_DIRECTIVES]
        })
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map