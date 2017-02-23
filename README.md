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
Enable the module in your app
```javascript
var app = angular.module('app', [ 'checkboxConfigurable' ]);
```
Add in html
```html
<checkbox-configurable 
    update-status="toggleState(item)"
    get-class="getCheckboxClass(item)"
    ng-model="item.status">
</checkbox-configurable>
```
Then you can use custom logic for getting icon class and updating status
```javascript
  $scope.getCheckboxClass = function(item){
    if(item.$pending){
      return "fa fa-repeat";
    } else {
      return item.status? "fa fa-check":"fa fa-minus";
    }
  }
  
  $scope.toggleState = function(item){
    if(!item.$pending){
      item.$pending = true;
      // simulate network delay with timeout
      $timeout(function(){
        item.status = !item.status;
        item.$pending = false;
      }, 2000 * Math.random());
    }
  }
  ```


TODO
-----
- [ ] imporove readme and directive itself
- [ ] choose another name - I am not sure about current name, so help me choose better or leave that
- [ ] add examples
