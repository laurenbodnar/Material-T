$(document).ready(function(){
    var minWidth = 768;
    var toc = $("#toc");
    var tocL = toc.offset().left;
    var tocT = $(".navbar").height() + $(".far").height();
    var tocLimMin = $(".main").offset().top;
    $(window).scroll(function(){
        var scroH = document.body.scrollTop + document.documentElement.scrollTop;
        var tocLimMax = $("#comments").offset().top - toc.height() - 100;
        console.log('xxxx', tocLimMin, scroH, tocLimMax);
        if(window.innerWidth > minWidth && tocLimMin <= scroH && scroH <= tocLimMax){  
            toc.css({
                "display": "block",
                "position": "fixed",
                "left": tocL,
                "top": tocT
            })
        }else if (window.innerWidth <= minWidth){
            $(".section").append($(".privateBadge"))
            $(".privateBadge a").css("display","list-item")
        }else {  
            toc.css("display","none")
        }
    }) 
    $(window).resize(function(){
        if(window.innerWidth <= minWidth){
            toc.css("display","none")
        }
    })

    $(".post_content img").on("click", function(e){
        $("body").append(
            "<div id='imgBackground'>"
                +`<img src='${e.target.src}'>`
            +"</div>"
        );
        $("#imgBackground").one("click", function(e){
            $("#imgBackground").remove();
        });
        $("#imgBackground img").one("click", function(e){
            e.stopPropagation();
        });
    });

    tocbot.init({
        tocSelector: '#tocbot',
        contentSelector: '.post_content',
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        linkClass: 'tocbot-link',
        activeLinkClass: 'tocbot-active-link',
        listClass: 'tocbot-list',
        isCollapsedClass: 'tocbot-is-collapsed',
        collapsibleClass: 'tocbot-is-collapsible',
        scrollSmooth: true,
    });

    // add Materia-T's class to hexo
    $("blockquote").addClass("blockquote");
}) 