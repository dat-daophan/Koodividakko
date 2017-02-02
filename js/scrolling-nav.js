//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 40 && $(".navbar").offset().top < 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

        function countemploy(time, ini, finish) {
                        var transi = finish - ini;
                        var current = ini;
                        var increment = 1;

                        var stepTime = Math.abs(Math.floor(time / transi));
                        var obj = document.getElementById("value");
                        var visi = document.getElementById("span");
                        var b = "";
                        var timer = setInterval(function() {

                        current++;
                        obj.innerHTML = current;
                        if (current == 3000) {

                        visi.innerHTML = "Clients";
                        clearInterval(timer);

                        }
                        }, 10);
                        }
                        countemploy(0, 2300, 10);


            function countemploy2(time, ini, finish) {
                                var transi = finish - ini;
                                var current = ini;
                                var increment = 1;

                                var stepTime = Math.abs(Math.floor(time / transi));
                                var obj = document.getElementById("value2");
                                var visi = document.getElementById("span2");
                                var b = "";
                                var timer = setInterval(function() {

                                current++;
                                obj.innerHTML = current;
                                if (current == 180) {

                                visi.innerHTML = "Employees";
                                clearInterval(timer);

                                }
                                }, 30);
                                }
                                countemploy2(0, 10, 10);


             function countemploy3(time, ini, finish) {
                                            var transi = finish - ini;
                                            var current = ini;
                                            var increment = 1;

                                            var stepTime = Math.abs(Math.floor(time / transi));
                                            var obj = document.getElementById("value3");
                                            var visi = document.getElementById("span3");
                                            var b = "";
                                            var timer = setInterval(function() {

                                            current++;
                                            obj.innerHTML = current;
                                            if (current == 10000) {

                                            visi.innerHTML = "Daily Users";
                                            clearInterval(timer);

                                            }
                                            }, 20);
                                            }
                                            countemploy3(0, 9600, 10);


    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top

        }, 1500);


        event.preventDefault();
    });
});


   $('a.page-scroll').click(function () {
    //$('#element').css({ backgroundColor: "#99cc00" }); //works but no animation
    //$('#element').animate({ backgroundColor: '#ffffff' }, 2000); //does nothing
    $('a.page-scroll').css({ color: "black"}).animate({}, 2500); //does nothing
});