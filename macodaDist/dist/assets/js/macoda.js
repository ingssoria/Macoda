$(document).ready(function() {

    /*$("#owl-demo").owlCarousel({

        items: 1,
        autoplay: true,
        navigation : true, // Show next and prev buttons
        slideSpeed : 8000,
        paginationSpeed : 400,
        singleItem:true,
        loop: true,
        transitionStyle : "backSlide"
    });*/

    var time = 7; // time in seconds
    var slide = $("#owl-demo");

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime;

    //Init the carousel
    slide.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        autoplay: true,
        loop: true,
        slideSpeed : 10000,
        paginationSpeed : 500,
        singleItem : true,
        dots: false,
        afterInit : progressBar,
        afterMove : moved,
        startDragging : pauseOnDragging,

    });

    /**Inicio**Con esto logro que se apliquen animaciones a los textos cada que pasa un elemento del carrusel**/
    slide.on("changed.owl.carousel", function (event) {

        $('h1').removeClass();
        $('p').removeClass();
        var item = event.item.index-2;
        switch (item){
            case 0:
            {
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('text-uppercase animated fadeInDown');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
                break;
            }
            case 1:
            {
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('text-uppercase animated fadeInLeft');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInRight');
                break;
            };
            case 2:
            {
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('text-uppercase animated zoomIn');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated zoomIn');
                break;
            };
            case 3:
            {
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('text-uppercase animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('text-white animated fadeInDown');
                break;
            }
        }
    });
    /**Fin**Con esto logro que se apliquen animaciones a los textos cada que pasa un elemento del carrusel**/

    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
        $elem = elem;
        //build progress bar elements
        buildProgressBar();
        //start counting
        start();
    }

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

    //moved callback
    function moved(){
        //clear interval
        clearTimeout(tick);
        //start again
        start();
    }

    //uncomment this to make pause on mouseover
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })

});
