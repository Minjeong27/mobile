$(document).ready(function(){

  $(".gnb").css({"right":"-600px"}); /* μ²μμμΉ */

  bb=true;
  $(".menu_toggle_btn").click(function(){

    $(this).toggleClass("menu-open");

    if(bb){
      $(".gnb").stop(true,true).animate({"margin-right":"600px"},500,function(){
        bb=false;
      });
    }else{
      $(".gnb").stop(true,true).animate({"margin-right":"0px"},500,function(){
        bb=true;
      });
    }

  });



  
});