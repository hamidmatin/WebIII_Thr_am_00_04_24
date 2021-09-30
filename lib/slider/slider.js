(function($){
  $.fn.slider = function(options){
    return this.each(function(){
      const defs = {}
      const opts = $.extend({}, defs, options)

      const slider = $(this)
      const sliderItems = slider.children('.item')

      const sliderWidth = parseFloat(slider.css('width'))
      const sliderHeight = parseFloat(slider.css('height'))
      const sliderRollerWidth = sliderWidth * sliderItems.length

      // console.log(sliderWidth)
      const sliderRoller = $('<div/>').addClass('slider-roller')
      const nextButton = $('<button/>').addClass('btn-next').html('next')
      const prevBtton = $('<button/>').addClass('btn-prev').html('prev')
      

      sliderItems.css('width', sliderWidth)
      sliderRoller.css({
        'width': sliderRollerWidth,
        'height': sliderHeight
      })
      

      sliderRoller.html(sliderItems)
      slider.append(sliderRoller, prevBtton, nextButton)

      /**************/
      nextButton.click(function(){

      })

      prevBtton.click(function(){
        
      })
    })
  }
})(jQuery)