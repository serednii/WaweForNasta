$(function () {

   //Slider
   $('.blog__list').slick({
      arrows: false,
      dots: true
   });

   //Filter images
   const mixer = mixitup('.mix__images');

   //Анімація при прокручуванні сторінки
   $(".menu a, .go-top, .logo, .content__icon").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = ($(id).offset().top);
      //аніміруємо перехід на відстань - top за 1500 мс
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $(window).scroll(function () {
      colorHeader();
      // Действие, если выполнен скролл
   });

   function updateMenuButton() {
      $('.menu-button').find('.menu-icon').toggleClass('menu-icon--active');
      $('.menu').toggleClass('menu--active');
      setEqualHeight();
   }

   $('.menu-button').click(function (e) {
      e.preventDefault();
      updateMenuButton();
   });

   $(document).mouseup(function (e) { // події клику по веб-документу
      const div = $("#id__menu"); // тут вказуємо ID элемента
      const div1 = $("#id__btn"); // тут вказуємо ID элемента
      const div3 = $(".menu__link"); // тут вказуємо class элементов

      if (!div.is(e.target) && !div1.is(e.target)  // якщо клік був не по нашому блоку
         && div.has(e.target).length === 0 && div1.has(e.target).length === 0) { // и не по его дочірнім элементам
         hiddenMenu();
      }
      // при переході по ссилці ховаємо меню 
      div3.is(e.target) && hiddenMenu();
   });

   //Ховаємо меню при кліку на ссилку
   function hiddenMenu() {
      $('.menu-button').find('.menu-icon').removeClass('menu-icon--active');
      $('.menu').removeClass('menu--active');
   }








});

