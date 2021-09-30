(function ($) {
  $.fn.customSlide = function (options) {
    return this.each(function () {
      const defs = { direction: 'width', duration: 400 };
      const opts = $.extend({}, defs, options);

      switch (opts.direction) {
        case 'width':
          $(this).animate(
            {
              width: 'toggle',
            },
            opts.duration
          );
          break;
        case 'height':
          $(this).animate(
            {
              height: 'toggle',
            },
            opts.duration
          );
      }
    });
  };
})(jQuery)