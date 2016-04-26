var $earth = $('.earth');
var $grass = $('.grass');
var $animals = $('.animals');

$earth.on('mouseover', function () {
  $earth.addClass('earth-grow');
});

$earth.on('mouseout', function () {
  $earth.removeClass('earth-grow');
});

$grass.waypoint(function (direction) {
  if (direction == 'down') {
    $grass.addClass('grass-fade');
  } else {
    $grass.removeClass('grass-fade');
  }
}, {offset: '100%'});

$animals.on('mouseover', function () {
  $animals.addClass('animals-grow');
});

$animals.on('mouseout', function () {
  $animals.removeClass('animals-grow');
});
