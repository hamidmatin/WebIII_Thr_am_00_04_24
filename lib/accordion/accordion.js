(function ($) {
  $.fn.accordion = function (options) {
    const defs = { duration: 300, type: 'single' };
    const opts = $.extend({}, defs, options);

    return this.each(function () {
      const accordion = $(this);
      const titles = accordion.children('.title');
      const contents = accordion.children('.content');

      contents.hide();
      titles.filter('.active').next().show();

      titles.click(function () {
        if (opts.type === 'single') {
          const currentTitle = $(this);
          const nextContent = currentTitle.next();

          if (nextContent.is(':hidden')) {
            titles.removeClass('active');
            currentTitle.addClass('active');

            contents.slideUp(opts.duration);
            nextContent.slideDown(opts.duration);
          }
        } else {
          $(this)
            .toggleClass('active')
            .next()
            .slideToggle(opts.duration)
        }
      });
    });
  };
})(jQuery);
