"use strict";
var $__3;
require('traceur-source-maps').install(require('traceur'));
Function.prototype.bound = function(context) {
  for (var args = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    $traceurRuntime.setProperty(args, $__1 - 1, arguments[$traceurRuntime.toProperty($__1)]);
  var $__0 = this;
  return (function() {
    for (var innerArgs = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      $traceurRuntime.setProperty(innerArgs, $__2, arguments[$traceurRuntime.toProperty($__2)]);
    return $__0.apply(context, args.concat(innerArgs));
  });
};
function simple() {
  console.log(this, arguments);
}
var one = [1, 2, 3];
var two = [4, 5, 6];
($__3 = simple).bound.apply($__3, $traceurRuntime.spread([{}], one)).apply(null, $traceurRuntime.spread(two));
simple.bound({}, 1, 2, 3)(4, 5, 6);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwcmVhZF9yZXN0LmVzNi5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci83IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzExIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEwIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUMsT0FBTyxVQUFVLE1BQU0sRUFBSSxVQUFVLE9BQU0sQUFBUztBQ0NuRyxNQUFTLEdBQUEsT0FBb0IsR0FBQztBQUFHLGFBQW9DLENBQ2hFLE9BQW9CLENBQUEsU0FBUSxPQUFPLENBQUcsT0FBa0I7QUNGekUsQURHYyxrQkNIQSxZQUFZLEFBQUMsTURHSyxTQUFvQyxDRUhwRSxDRkd5RSxTQUFRLENFSC9ELGVBQWMsV0FBVyxBQUFDLE1BQWtCLENBQUMsQ0RDakIsQ0RFdUQ7QUFBQTtBREZwRyxTQUFPLFNBQUMsQUFBVztBSUFSLFFBQVMsR0FBQSxZQUFvQixHQUFDO0FBQUcsYUFBb0IsRUFBQSxDQUNoRCxPQUFvQixDQUFBLFNBQVEsT0FBTyxDQUFHLE9BQWtCO0FGRnpFLEFFR2Msb0JGSEEsWUFBWSxBQUFDLGlCQ0EzQixDQ0dxRCxTQUFRLENESDNDLGVBQWMsV0FBVyxBQUFDLE1BQWtCLENBQUMsQ0RDakIsQ0VFbUM7QUFBQSxTSkZ2RCxDQUFBLFVBQVMsQUFBQyxDQUFDLE9BQU0sQ0FBRyxDQUFBLElBQUcsT0FBTyxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUM7RUFBQSxFQUFBO0FBQ3BFLENBQUE7QUFFQSxPQUFTLE9BQUssQ0FBQyxBQUFDLENBQUU7QUFDakIsUUFBTSxJQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsVUFBUSxDQUFDLENBQUE7QUFDNUI7QUFBQSxFQUVJLENBQUEsR0FBRSxFQUFJLEVBQUMsQ0FBQSxDQUFFLEVBQUEsQ0FBRSxFQUFBLENBQUM7RUFDWixDQUFBLEdBQUUsRUFBSSxFQUFDLENBQUEsQ0FBRSxFQUFBLENBQUUsRUFBQSxDQUFDO0FBQ2hCLE1BQUEsT0FBSyxtQktWTCxDQUFBLGVBQWMsT0FBTyxFTFVSLEVBQUMsRUFBTSxJQUFFLENLVmtCLGFBQXhDLENBQUEsZUFBYyxPQUFPLENMVU8sR0FBRSxDS1ZVLEVMVVQ7QUFDL0IsS0FBSyxNQUFNLEFBQUMsQ0FBQyxFQUFDLENBQUcsRUFBQSxDQUFFLEVBQUEsQ0FBRSxFQUFBLENBQUMsQUFBQyxDQUFDLENBQUEsQ0FBRSxFQUFBLENBQUUsRUFBQSxDQUFDLENBQUE7QUFBQSIsImZpbGUiOiJzcHJlYWRfcmVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7RnVuY3Rpb24ucHJvdG90eXBlLmJvdW5kID0gZnVuY3Rpb24gKGNvbnRleHQsIC4uLmFyZ3MpIHtcblx0cmV0dXJuICguLi5pbm5lckFyZ3MpID0+IHRoaXMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoaW5uZXJBcmdzKSlcbn1cblxuZnVuY3Rpb24gc2ltcGxlKCkge1xuXHRjb25zb2xlLmxvZyh0aGlzLCBhcmd1bWVudHMpXG59XG5cbmxldCBvbmUgPSBbMSwyLDNdXG5sZXQgdHdvID0gWzQsNSw2XVxuc2ltcGxlLmJvdW5kKHt9LCAuLi5vbmUpKC4uLnR3bylcbnNpbXBsZS5ib3VuZCh7fSwgMSwyLDMpKDQsNSw2KSIsIlxuICAgICAgICAgICAgZm9yICh2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSBbXSwgJF9fcGxhY2Vob2xkZXJfXzEgPSAkX19wbGFjZWhvbGRlcl9fMjtcbiAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMgPCBhcmd1bWVudHMubGVuZ3RoOyAkX19wbGFjZWhvbGRlcl9fNCsrKVxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNVskX19wbGFjZWhvbGRlcl9fNiAtICRfX3BsYWNlaG9sZGVyX183XSA9IGFyZ3VtZW50c1skX19wbGFjZWhvbGRlcl9fOF07IiwiJHRyYWNldXJSdW50aW1lLnNldFByb3BlcnR5KCRfX3BsYWNlaG9sZGVyX18wLFxuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xLCAkX19wbGFjZWhvbGRlcl9fMikiLCIkX19wbGFjZWhvbGRlcl9fMFskdHJhY2V1clJ1bnRpbWUudG9Qcm9wZXJ0eSgkX19wbGFjZWhvbGRlcl9fMSldIiwiXG4gICAgICAgICAgICBmb3IgKHZhciAkX19wbGFjZWhvbGRlcl9fMCA9IFtdLCAkX19wbGFjZWhvbGRlcl9fMSA9IDA7XG4gICAgICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18yIDwgYXJndW1lbnRzLmxlbmd0aDsgJF9fcGxhY2Vob2xkZXJfXzMrKylcbiAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzRbJF9fcGxhY2Vob2xkZXJfXzVdID0gYXJndW1lbnRzWyRfX3BsYWNlaG9sZGVyX182XTsiLCIkdHJhY2V1clJ1bnRpbWUuc3ByZWFkKCRfX3BsYWNlaG9sZGVyX18wKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==