jQuery(document).ready(function() {


	  $(function() {
	    $('nav#menu').mmenu();
	});

	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	$('#intro').parallax("50%", 0.3);
	$('#intro_2').parallax("50%", 0.3);

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    $(document).ready(function() {

      var time = 7; // time in seconds

      var $progressBar,
          $bar,
          $elem,
          isPause,
          tick,
          percentTime;

        //Init the carousel
        $("#hero-slider").owlCarousel({
          slideSpeed : 500,
          paginationSpeed : 500,
          singleItem : true,
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging
        });

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem){
          $elem = elem;
          //build progress bar elements
          buildProgressBar();
          //start counting
          start();
        }

        //Init the carousel
        $("#post-slider").owlCarousel({
          slideSpeed : 500,
          paginationSpeed : 500,
          singleItem : true,
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging
        });

        //create div#progressBar and div#bar then prepend to $("#owl-demo")
        function buildProgressBar(){
          $progressBar = $("<div>",{
            id:"progressBar"
          });
          $bar = $("<div>",{
            id:"bar"
          });
          $progressBar.append($bar).prependTo($elem);
        }

        function start() {
          //reset timer
          percentTime = 0;
          isPause = false;
          //run interval every 0.01 second
          tick = setInterval(interval, 10);
        };

        function interval() {
          if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
               width: percentTime+"%"
             });
            //if percentTime is equal or greater than 100
            if(percentTime >= 100){
              //slide to next item
              $elem.trigger('owl.next')
            }
          }
        }

        //pause while dragging
        function pauseOnDragging(){
          isPause = true;
        }

        function moved(){
          clearTimeout(tick);
          start();
        }
    });

    $(document).ready(function() {

      $("#testimonial-carousel").owlCarousel({
        autoPlay: 4600,
        items : 1,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

    });


	jQuery('.progress_block .progress div').each(function() {
		var w = jQuery(this).attr('data-level');
		jQuery(this).animate({width : w + '%'}, 500);
	});

});
