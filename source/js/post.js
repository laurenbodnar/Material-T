$(document).ready(function(){
    var navHeight = $(".navbar").height();
    var minWidth = 768;
    var toc = $("#toc");
    var tocL = toc.offset().left;
    var tocT = navHeight + $(".far").height();
    var tocLimMin = $(".main").offset().top;
    var tocLimMax = $("#comments").offset().top - navHeight;
    $(window).scroll(function(){
        var scroH = document.body.scrollTop + document.documentElement.scrollTop;
        if(window.innerWidth > minWidth && tocLimMin <= scroH && scroH <= tocLimMax){  
            toc.css({
                "display": "block",
                "position": "fixed",
                "left": tocL,
                "top": tocT
            })
        }else if(scroH <= tocLimMin){  
            toc.css({
                "position": "",
                "left": '',
                "top": ''
            })
        } else if(scroH > tocLimMax){
            toc.css("display","none")
        }
    }) 
    $(window).resize(function(){
        if(window.innerWidth <= minWidth){
            console.log(window.innerWidth)
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