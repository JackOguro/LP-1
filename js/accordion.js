$('.faq_item_txt').on('click', function () {
  $('.faq_item_txt').not(this).removeClass('open');
  $('.faq_item_txt').not(this).next().slideUp(300);
  $(this).toggleClass('open');
  $(this).next().slideToggle(300);
})