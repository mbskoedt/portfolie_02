const radius = 140;
TweenMax.staggerFromTo('.blob', 13, {
  cycle: {
    attr: function(i) {
      var r = i * 90;
      return {
        transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
      }
    }
  }
}, {
  cycle: {
    attr: function(i) {
      let r = i * 90 + 360;
      return {
        transform: 'rotate(' + r + ') translate(' + radius + ',0.1) rotate(' + (-r) + ')'
      }
    }
  },
  ease: Linear.easeNone,
  repeat: -1
});
