$(document).ready(function()
{

    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function()
    {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        
        // Scroll to the top function 
        if($(window).scrollTop() > 0)
        {
            $('.top').show();
        } 
        else
        {
            $('.top').hide();
        }
    });
    
    // Smooth scrolling

    $('a[href*="#]').on('click',function(e)
    {
        e.preventDefault();
        $('html', body).animate({

            scrollTop : $($(this).atr('href')).offset().top,
        },
            500,
            'linear'
        );
    });

    // Send button 
    $("#sendBtn").click(function() 
    {
        var host = "https://portfolio-back-three.vercel.app";
        var localHost = "http://localhost:3000";
        var sendObject = {
            name: $("#inputName").val(),
            email: $("#inputEmail").val(),
            project: $("#inputProject").val(),
            message: $("#inputMessage").val()
        }

        $.ajax({
            type:"POST",
            url:localHost + "/api/inquiry",
            data: JSON.stringify(sendObject),
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        })
        

     
   
    })
    

});