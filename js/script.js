$(document).ready(function () {

//color Picker Primary Button Scipt//

     $('input.color').change(function () {
        var addColor = $("input[name=color]").val(); 
        $('.header').css({'background-color': addColor, 'border-color': addColor});
        $('.color-blue').css('color', addColor);
        $('table.button td').css('background', addColor);
        $('.background-image').css('background-color', addColor);
        $('.background-image2').css('background-color', addColor);
     });
    

//color Picker Primary Border and Rollover//

     $('input#color4').change(function () {
        var addColor = $("input[name=color]").val();     
        var addColor4 = $("input[name=color4]").val();
        
        $('style').append('table.button:hover td, table.button:visited td, table.button:active td { background:' + addColor4 + '!important;}');
         
 });

//color Picker Secondary//

     $('input#color2').change(function () {
        var addColor3 = $("input[name=color3]").val();     
        var addColor2 = $("input[name=color2]").val(); 
         
        $('table.secondary td').css({'background': addColor2, 'border-color': addColor3});
});

//color Picker Secondary Border and Rollover//

     $('input#color3').change(function () {
        var addColor2 = $("input[name=color2]").val();     
        var addColor3 = $("input[name=color3]").val();
        
        $('style').append('table.secondary:hover td { background:' + addColor3 + '!important; color: #ffffff; border-color: 5px' + addColor2 + ';}');
         
  });
    

//Logo Image script//    

    
    $('#LogoID').keyup(function () {
        $('#rowHeader').removeClass('displayNone');
    	var addLogo = $("input[name=Logo]").val();
        $('table.headerID').addClass('header');    
        $('#Logoimage').attr("height", "75px");
        if(addLogo === "Logo URL"){   
        $('#Logoimage').replaceWith('<img src="' + Logo + '" width="auto" height="75px" id="Logoimage">');
        }
            else{
         $('img#Logoimage').attr("src", addLogo);    
            }
    });
        
    $('#removeLogo').click (function() {
        
        $('img#Logoimage').removeAttr('src');
        $('img#Logoimage').removeAttr('height');
        $('table.headerID').removeClass('header'); 
        
    }); 
    
//subheadline script//    
    
    $('#SubHeadlineID').keyup(function () {
    	var addSubheadline = $("input[name=subheadline]").val();
        $('#subheadline').text(addSubheadline);
    });

//headline script//   

    $('#HeadlineID').keyup(function () {
    	var addHeadline = $("input[name=headline]").val();
        $('#headline').text(addHeadline);
    });
 
//Video Thumbnail script//

    $('#VideoThumbnail').keyup(function () {
    	var addVideoThumbnail = $("input[name=VideoThumbnail]").val();
        $('#VideoThumbnailID').attr("src", addVideoThumbnail);
    });

//Blog Post URL script//
    
    $('#BlogPostURLID').keyup(function () {
    	var addBlogPostURL = $("input[name=BlogPostURL]").val();
        $('a#BlogPostURL').attr("href", addBlogPostURL);
    });    
    
    //Teaser script//

    $('textarea#TeaserID').keyup(function () {
    	var addTeaser = $("textarea[name=Teaser]").val();
        $('#Teaser').text(addTeaser);
    });

//YouTube Video URL script//
    
    $('#YoutubeURLID').keyup(function () {
    	var addYoutubeURL = $("input[name=YoutubeURL]").val();
        $('a#YoutubeURL').attr("href", addYoutubeURL);
    });
//Secondary CTA URL script//

    $('#SecondaryCTAID').keyup(function () {
    	var addSecondaryCTA = $("input[name=SecondaryCTA]").val();
        $('#SecondaryCTA').attr("href", addSecondaryCTA);
    });


//Home Search script//

    $('#HomeSearchID').keyup(function () {
        var addHomeSearch = $("input[name=HomeSearch]").val();
        $('a#HomeSearch').attr("href", addHomeSearch);
        
  });
    
//Home value location script//

    $('#CTALocationID').keyup(function () {
        var addCTALocation = $("input[name=CTALocation]").val();
        $('#CTALocation').text(addCTALocation);
        
  });
    $('#removeHomeValueLocation').click (function() {
        $('#CTALocation').empty ();
    });

//Home value script//

    $('#HomeValueID').keyup(function () {
        var addHomeValue = $("input[name=HomeValue]").val();
        $('a#HomeValue').attr('href', addHomeValue);
        
  });

//Client Name script//

    $('#ClientNameID').keyup(function () {
        var addClientName = $("input[name=ClientName]").val();
        $('#ClientName').text(addClientName);
        
  });

//Client Email script//

    $('#ClientEmailID').keyup(function () {
        var addClientEmail = $("input[name=ClientEmail]").val();
        $('#ClientEmail').replaceWith('<a id="ClientEmail" href="mailto:' + addClientEmail +'">' + addClientEmail + '</a>');
  });


//Client Phone script//

    $('#ClientPhone').keyup(function () {
        var addClientPhone = $("input[name=ClientPhone]").val();
        $('p#ClientPhoneNumber').text(addClientPhone);       
  });


//Client Thumbnail script//

    $("#ClientPhoto").keyup(function () {
    	var addClientPhoto = $("input[name=ClientPhoto]").val();
        $('#ClientPhotoID').attr('src', addClientPhoto);
    });
    
//Client Thumbnail script//

    $("#ClientDescriptionID").keyup(function () {
    	var addClientDescription = $("input[name=ClientDescription]").val();
        $('#ClientDescription').text(addClientDescription);
    });    
   
//Submit Form Script//    
    
    $('#submit-button').click(function (){
        if (confirm("ARE YOU SURE? You can't undo this. Once you hit okay, you will not be able to go back and edit this again. BE SURE TO DOUBLE CHECK YOUR WORK!!!!!!"))
        {
            $('#edit-email').remove();
            alert("shit's done");
            $('div#scripts').remove();
        }
        else{
            return false;
        }
            });
});


