courseRoster.directive("hometext", function(){
  return {
    template: "back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }
});

courseRoster.directive("sampleCourse", function() {

});