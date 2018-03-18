var lineDrawing = anime({
  targets: 'polygon, path, image',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

var functionBasedDelay = anime({
  targets: 'article',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  delay: function (el, i, l) {
    return 500 + i * 100;
  }
});


