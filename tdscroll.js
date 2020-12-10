// @explanation
// define the pin once in the target scene, but
// don't attach animation within same scene; instead
// create a scene for every class and toggle them on or off
// depending on the offset value of the scroll.

// @info
// To see this pen with indicators make sure to uncomment the 
// lines containing .addIndicators()
//
// While this is a scroll example I've also included a CSS only
// version to understand how steps can work in CSS animations.

// global vars
var viewer       = document.querySelector('.viewer'),
    frame_count  = 7,
    offset_value = 25;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + '%',
  reverse: true
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}