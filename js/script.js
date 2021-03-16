$(function(){


    //Gérer classe active du menu

            $(".navigation a").click(function() {
                
                $(".navigation a").each(function(){
                    $(this).removeClass("active");
                });
                
                $(this).addClass("active");
            });


    //Gerer le menu mobile

        $('.menu-mobile-link').hide();
        $('#menu-btn').on('click', function(){
            $('.menu-mobile-link').toggle();
        })
        $('.menu-mobile-link a').on('click', function(){
            $('.menu-mobile-link').hide();
        })
    // Animer le scroll
        $('.navigation a').on('click', function(){

            let cible = this.hash;

            $('body,html').animate({scrollTop: $(cible).offset().top}, 900, function(){window.location.cible = cible;});
        });

    // Scroll Spy pour class active

        $(window).bind('scroll', function() {
            let currentTop = $(window).scrollTop();
            let elems = $('.scrollspy');
            elems.each(function(){
                let elemTop 	= $(this).offset().top;
                let elemBottom 	= elemTop + $(this).height();
                if(currentTop >= elemTop-5 && currentTop <= elemBottom+5){
                    let id 		= $(this).attr('id');
                    let navElem = $('.navigation a[href="#' + id+ '"]');
                    $(".navigation a").each(function(){
                        $(this).removeClass("active");
                    });
                    navElem.addClass('active').siblings().removeClass( 'active' );
                }
            })
        }); 


    //Onglets Produits classe active

        $(".onglets-button button").click(function() {
            

            $(".onglets-button button").each(function(){
                $(this).removeClass("active");
            });
            
            $(this).addClass("active");

            let idBtn = this.id;
            console.log(idBtn);

            if(idBtn == "cosmetiques-btn"){
                $(".onglets-produits").each(function(){
                    $(this).addClass("hide");
                });
                $('#cosmetiques').removeClass("hide");
            }else if(idBtn == "accessoires-btn"){
                $(".onglets-produits").each(function(){
                    $(this).addClass("hide");
                });
                $('#accessoires').removeClass("hide");
            }else if(idBtn == "alimentation-btn"){
                $(".onglets-produits").each(function(){
                    $(this).addClass("hide");
                });
                $('#alimentation').removeClass("hide");
            }else if(idBtn == "jouets-btn"){
                $(".onglets-produits").each(function(){
                    $(this).addClass("hide");
                });
                $('#jouets').removeClass("hide");
            }else if(idBtn == "divers-btn"){
                $(".onglets-produits").each(function(){
                    $(this).addClass("hide");
                });
                $('#divers').removeClass("hide");
            }
            
        });




    //Galerie Photo : 
        const btnPrev = document.querySelector('#prev');
        const btnNext = document.querySelector('#next');
        const items = document.querySelectorAll('.galerie-box');
        const nbSlide = items.length;


        let count = 0;

        function nextSlide(){
        items[count].classList.remove('active');

        if(count < nbSlide -1 ){
            count++;
        }else{
            count=0;
        }

        items[count].classList.add('active');
        }
        function prevSlide(){
        items[count].classList.remove('active');

        if(count > 0 ){
            count--;
        }else{
            count= nbSlide-1;
        }

        items[count].classList.add('active');
        }


        btnNext.addEventListener('click', nextSlide);
        btnPrev.addEventListener('click', prevSlide);

        //v2 ajout d'un aggrandissement des tof


});