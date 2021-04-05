$(document).ready(function () {
    
    $("#left").click(function (){
        $(".leftBar").toggle("blind");
        
    });
    $('html, body').css({
        height: '100%'
    });

        //---------------
        

        //---------------
        $('#empezar').click(function () {
            $('html, body').animate({
                scrollTop:650
            },1000);                   
            
        })
        $('#sobreMi').click(function () {
            $('html, body').animate({
                scrollTop:650
            },1000);  
})

        $('#inicio').click(function () {
                    $('#pagina1').fadeIn(1000);
                    $('html, body').css({
                        height: '100%'
                    });
                
        })
// -------------------------------
    
//-------------------------------
$('#tecnologiasB').click(function () {
    $('html, body').animate({
        scrollTop:1300
    },1000);
    
    
})
//-----------------------
       
        $('#proyectosB').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop:2000
            },1000);
            
        })
//-----------------------
$('#contactoB').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:2800
    },1000);    
})
$('#contacto').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:2820
    },1000);
    
})
//-----------------------
$('.subir').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:0
    },1000);
    
})
//-----------------------
 $('.carousel').carousel({
            shift:100,

        });
     
        $("#desarrolloWeb").hide();
        $("#programacion").hide();
        $("#ingenieria").hide();

        $("#inicio").click(function (){
            $("#desarrolloWeb").fadeIn('slow');
            $("#programacion").delay(800).fadeIn('slow');
            $("#ingenieria").delay(1600).fadeIn('slow');
            });


    
    var animMas= gsap.to("#redesB",{
        duration:6,
        rotate:360,
        transformOrigin:"50% 50%",
        ease:'linear',
        repeat:1000
    });
    var animFc=gsap.to("#fc",{
        duration:6,
        rotate:360,
        transformOrigin:"50% 50%",
        ease:'linear',
        repeat:1000

    });
     var animWts= gsap.to("#wts",{
        duration:6,
        rotate:360,
        transformOrigin:"50% 50%",
        ease:'linear',
        repeat:1000

    });
    var animInst= gsap.to("#inst",{
        duration:6,
        rotate:360,
        transformOrigin:"50% 50%",
        ease:'linear',
        repeat:1000

    });
//------------------------------


$("#redesB").click(function () {
    $("#fc").toggle(1000);
    $("#wts").toggle(1000);
    $("#inst").toggle(1000);
})

    //--------------------
var logo=$('#contenedorRedes');
    var animlogo = gsap.timeline({paused:false, ease:'power2.inOut'})
    .to(logo,{
        duration:6,
        rotate:-360,
        transformOrigin:"50% 50%",
        ease:'linear',
        repeat:1000
    });  

        
    $('.stop').mouseenter(function () {
        animlogo.paused(true);
        animFc.paused(true);
        animWts.paused(true);
        animInst.paused(true);
        animMas.paused(true); 
    });

    $('.stop').mouseout(function () {
        animlogo.paused(false);
        animFc.paused(false);
        animWts.paused(false);
        animInst.paused(false);
        animMas.paused(false); 
    });
    //------------------WRAPER--------------
  // set some global properties
TweenLite.set('.wrap', {perspective:1000});
TweenLite.set('.inner', {transformStyle:"preserve-3d"});
TweenLite.set('.back', {rotationX:-90});
TweenLite.set(['.back', '.front'], {backfaceVisibility:"hidden", transformOrigin:'50% 0%'});

$(".wrapper").each(function(i, el) {
    
   
  var tl = new TimelineMax({paused: true});

  var t = tl
         .set(el,{willChange:"transform"})
         .to($(el).find('.inner'), 0.5, {y:"-8rem", rotationX:90, z:0.01, zIndex: 2, overwrite:"all", ease:Back.easeOut}, 0);

  el.animation = t;

  $(el).on("mouseenter",function(){
    this.animation.play();
  }).on("mouseleave",function(){
    this.animation.reverse();
  });
  
});


   
   

    });