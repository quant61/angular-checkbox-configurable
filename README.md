angular-checkbox-configurable
=====

angular-checkbox-configurable is like checkbox but with multiple and configurable set of states and custom behavior.
For example, you can make api call on click and show status of you action(pending/success/fail)



background
-----
I was searching for async angular checkbox, but I didn't find it. So I had to write it myself.
I based my directive on [deltreey/angular-multistagebox](https://github.com/deltreey/angular-multistagebox)
That directive is good as example of writing directives, but not as bower component because it has only three states and classes are hardcoded.

Features
-----
* customizable set and number of states with customizable
* customizable functions for update status


Example
-----
```javascript
var app = angular.module('app', [ 'angular-checkbox-configurable' ]);
```

```html
<checkbox-configurable 
    update-status="toggleState(item)"
    get-class="getCheckboxClass(item)"
    ng-model="item.status">
</checkbox-configurable>
```
























