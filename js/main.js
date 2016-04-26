var $earth = $('.earth');
var $grass = $('.grass');

$earth.on('mouseover', function () {
  $earth.addClass('earth-grow');
});

$earth.on('mouseout', function () {
  $earth.removeClass('earth-grow');
});

$gras.waypoint(function (direction) {
  if (direction == 'down') {
    $grass.addClass('grass-fade');
  } else {
    $grass.removeClass('grass-fade');
  }
}, {offset: '100%'});
