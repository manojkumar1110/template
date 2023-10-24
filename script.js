$(document).ready(function(){
    $(".five").click(function(){
        // $(".one").toggle(2000);
        // $(".two").toggle(2000);
        $("#toggle").toggle(2000);
        // $(".toggle").show(2000);
    });
    $("#effect").on({
        mouseover:function(){
            $(".con").fadeOut(2000);
        },
        mouseleave:function(){
            $(".con").fadeIn(2000);
        },
    });
    $("#effect1").on({
        mouseover:function(){
            $(".col").fadeOut(2000);
        },
        mouseleave:function(){
            $(".col").fadeIn(2000);
        }
    });
    $(".page").on({
        mouseover:function(){
            $("#fade").fadeOut(2000);
        },
        mouseleave:function(){
            $("#fade").fadeIn(2000);
        }
    });
    $(".members").on({
        mouseover:function(){
            $(".js").fadeOut(6000);
        },
        mouseleave:function(){
            $(".js").fadeIn(6000);
        }
    });
    $(".team8").on({
        mouseover:function(){
            $(".teamh,.teamp").fadeOut(2000);
        },
        mouseleave:function(){
            $(".teamh,.teamp").fadeIn(2000);
        }
    });
    $(".team9").on({
        mouseover:function(){
            $(".teamh,.teamp").fadeOut(2000);
        },
        mouseleave:function(){
            $(".teamh,.teamp").fadeIn(2000);
        }
    });

 
});