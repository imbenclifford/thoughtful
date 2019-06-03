angular.module('charityApp', [])
  .controller('CharityController', function() {
    var charityList = this;
    charityList.charities = [
      {name:'GiveDirectly', selected:true},
      {name:'Coalition', selected:false}];
 
    charityList.addCharity = function() {
      charityList.charities.push({name:charityList.todoText, selected:false});
      charityList.todoText = '';
    };
 
    charityList.archive = function() {
      var oldCharities = charityList.charities;
      charityList.charities = [];
      angular.forEach(oldCharities, function(todo) {
        if (!todo.done) charityList.charities.push(todo);
      });
    };
  });