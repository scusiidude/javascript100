"use strict";
require('traceur-source-maps').install(require('traceur'));
function outer() {
  var x = true;
  function inner() {
    console.log(x);
    x = false;
    console.log(x);
  }
  return inner;
}
var inner = outer();
setTimeout((function() {
  return inner();
}), 2000);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldF9mdW5jdGlvbi5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUMsT0FBUyxNQUFJLENBQUMsQUFBQztJQUNyRSxDQUFBLENBQUEsRUFBSSxLQUFHO0FBRVgsU0FBUyxNQUFJLENBQUMsQUFBQyxDQUFFO0FBQ2hCLFVBQU0sSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDZCxJQUFBLEVBQUksTUFBSSxDQUFDO0FBQ1QsVUFBTSxJQUFJLEFBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztFQUNmO0FBQUEsQUFFQSxPQUFPLE1BQUksQ0FBQztBQUNiO0VBRUksQ0FBQSxLQUFJLEVBQUksQ0FBQSxLQUFJLEFBQUMsRUFBQztBQUNsQixTQUFTLEFBQUMsRUFBQyxTQUFBLEFBQUM7T0FBSyxDQUFBLEtBQUksQUFBQyxFQUFDO0FBQUEsRUFBRyxLQUFHLENBQUMsQ0FBQTtBQUFBIiwiZmlsZSI6ImxldF9mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7ZnVuY3Rpb24gb3V0ZXIoKSB7XG5cdGxldCB4ID0gdHJ1ZTtcblxuXHRmdW5jdGlvbiBpbm5lcigpIHtcblx0XHRjb25zb2xlLmxvZyh4KTtcblx0XHR4ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2coeCk7XG5cdH1cblxuXHRyZXR1cm4gaW5uZXI7XG59XG5cbmxldCBpbm5lciA9IG91dGVyKClcbnNldFRpbWVvdXQoKCkgPT4gaW5uZXIoKSwgMjAwMCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=