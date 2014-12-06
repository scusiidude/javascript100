"use strict";
require('traceur-source-maps').install(require('traceur'));
function foo() {
  for (var args = [],
      $__0 = 0; $__0 < arguments.length; $__0++)
    $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
  console.log(this, args);
}
var args = [1, 2, 3];
foo.apply(null, $traceurRuntime.spread([0], args));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZC5lczYuanMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTEiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUMsT0FBUyxJQUFFLENBQUUsQUFBTTtBQ0NsRSxNQUFTLEdBQUEsT0FBb0IsR0FBQztBQUFHLFdBQW9CLEVBQUEsQ0FDaEQsT0FBb0IsQ0FBQSxTQUFRLE9BQU8sQ0FBRyxPQUFrQjtBQUMzRCxBQ0hkLGtCQUFjLFlBQVksQUFBQyxZQ0EzQixDRkdxRCxTQUFRLENFSDNDLGVBQWMsV0FBVyxBQUFDLE1BQWtCLENBQUMsQ0RDakIsQ0RFbUM7QUFBQSxBREZoRixRQUFNLElBQUksQUFBQyxDQUFDLElBQUcsQ0FBRyxLQUFHLENBQUMsQ0FBQTtBQUN2QjtFQUVJLENBQUEsSUFBRyxFQUFJLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBRSxFQUFBLENBQUM7QUFFakIsRUFBRSxZSU5GLENBQUEsZUFBYyxPQUFPLEVKTWpCLENBQUEsRUFBTSxLQUFHLENJTjJCLEVKTTFCO0FBQ2QiLCJmaWxlIjoic3ByZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtmdW5jdGlvbiBmb28oLi4uYXJncykge1xuXHRjb25zb2xlLmxvZyh0aGlzLCBhcmdzKVxufVxuXG5sZXQgYXJncyA9IFsxLDIsM11cbi8vIGZvby5hcHBseShudWxsLCBhcmdzKVxuZm9vKDAsIC4uLmFyZ3MpXG4iLCJcbiAgICAgICAgICAgIGZvciAodmFyICRfX3BsYWNlaG9sZGVyX18wID0gW10sICRfX3BsYWNlaG9sZGVyX18xID0gMDtcbiAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgPCBhcmd1bWVudHMubGVuZ3RoOyAkX19wbGFjZWhvbGRlcl9fMysrKVxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNFskX19wbGFjZWhvbGRlcl9fNV0gPSBhcmd1bWVudHNbJF9fcGxhY2Vob2xkZXJfXzZdOyIsIiR0cmFjZXVyUnVudGltZS5zZXRQcm9wZXJ0eSgkX19wbGFjZWhvbGRlcl9fMCxcbiAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIpIiwiJF9fcGxhY2Vob2xkZXJfXzBbJHRyYWNldXJSdW50aW1lLnRvUHJvcGVydHkoJF9fcGxhY2Vob2xkZXJfXzEpXSIsIiR0cmFjZXVyUnVudGltZS5zcHJlYWQoJF9fcGxhY2Vob2xkZXJfXzApIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9