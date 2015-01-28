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
        
        $('style').append('table.button:hover td, table.button:visited td, table.button:active td { background:' + addColor4 + '!important; }');
         
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
        
        $('style').append('table.secondary:hover td { background:' + addColor3 + '!important; color: #555; border-color: 5px' + addColor2 + ';}');
         
  });
    

//Logo Image script//    

    
    $('#LogoID').keyup(function () {
        $('#rowHeader').removeClass('displayNone');
    	var addLogo = $("input[name=Logo]").val();
        $('table.headerID').addClass('header');    
        $('#Logoimage').attr("height", "75px");
        if(addLogo === "Logo URL"){   
        $('#Logoimage').attr("src", "http://placehold.it/150x75")
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

    $('#addSecondaryCTA').click(function () {
    	var addSecondaryCTA = $("input[name=SecondaryCTA]").val();
        $('#SecondaryCTA').attr("href", addSecondaryCTA);
    });
    $('#removeSecondaryCTA').click (function() {
        $('#SecondaryCTA').empty ();
    });

//Home Search script//

    $('#addHomeSearch').click(function () {
        var addHomeSearch = $("input[name=HomeSearch]").val();
        $('#HomeSearch').attr("href", addHomeSearch);
        
  });
    $('#removeHomeSearch').click (function() {
        $('#HomeSearch').empty ();
    });

//Home value location script//

    $('#addCTALocation').click(function () {
        $('#CTALocation').empty ();
        var addCTALocation = $("input[name=CTALocation]").val();
        $('#CTALocation').append('<b>Full ' + addCTALocation + ' Home Search</b>');
        
  });
    $('#removeHomeValueLocation').click (function() {
        $('#CTALocation').empty ();
    });

//Home value script//

    $('#addHomeValue').click(function () {
        var addHomeValue = $("input[name=HomeValue]").val();
        $('#HomeValue').attr('href', addHomeValue);
        
  });
    $('#removeHomeValue').click (function() {
        $('#HomeValue').empty ();
    });

//Client Name script//

    $('#ClientNameID').keyup(function () {
        var addClientName = $("input[name=ClientName]").val();
        $('#ClientName').text(addClientName);
        
  });
    $('#removeClientName').click (function() {
        $('#ClientName').empty ();
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
   
});

