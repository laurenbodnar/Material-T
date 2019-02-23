$(document).ready(function(){  
    // copy from https://github.com/fi3ework/hexo-theme-archer
    var logStyle = 'color: #fff; background: #f75357; padding: 1px; border-radius: 5px;'
    console.log('%c 🎯 Material-T', logStyle)
    console.log('%c 🏷 Version: 0.9.1 ', logStyle)
    console.log('%c 📦 https://github.com/invom/Material-T ', logStyle) 

    const hash = window.location.hash;
    const pathname = window.location.pathname;
    if (pathname.includes('archives') && hash){
        console.log(hash, $('.tab-pane'));
        $('.card-body .tab-pane').each(function(){
            let ele = $(this);
            if ('#' + ele.attr('id') === hash){
                ele.addClass('active show');
            }else{
                ele.removeClass('active show');
            }
        });
        $('.card-body .nav-link').each(function(){
            let ele = $(this);
            if (ele.attr('href') === hash){
                ele.addClass('active show');
            }else{
                ele.removeClass('active show');
            }
        });
    }
}) 