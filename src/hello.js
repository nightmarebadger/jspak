define([
  'jquery',
  'mockup-patterns-base'
], function ($, Base) {
  'use strict';

  var HelloWorld = Base.extend({
    name: 'helloworld',
    defaults: {
      'color': 'black',
      'bgcolor': 'yellow'
    },
    init: function () {
      var $label = this.$el;
      $label.text('Hello, World!');
      $label.css({
        'color': this.options.color,
        'background': this.options.bgcolor
      });
    }
  });

  return HelloWorld;
});
