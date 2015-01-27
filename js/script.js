$(document).ready(function () { 
      //////////////////
    //Logo Image script//    
     //////////////////
    
    $('#addLogo').click(function () {
        $('#rowHeader').removeClass('displayNone');
    	var addLogo = $("input[name=Logo]").val();
        if(addLogo === 'Logo URL'){
        $('#Logo').empty ();    
        $('#Logo').append ('<img src="http://placehold.it/150x75" />')}
            else{
        $('#Logo').empty();    
         $('#Logo').append ('<img src="' + addLogo + '" height="75px" />')}
    });
        
    $('#removeLogo').click (function() {
        $('#rowHeader').addClass('displayNone');
        
    });   
      ///////////////////
    //subheadline script//    
     ///////////////////
    $('#addSubheadline').click(function () {
        $('#subheadline').empty ();
    	var addSubheadline = $("input[name=subheadline]").val();
        $('#subheadline').append (addSubheadline);
    });
    $('#removeSubheadline').click (function() {
        $('#subheadline').empty ();
    });
     /////////////////
    //headline script//   
     ////////////////
    $('#addheadline').click(function () {
        $('#headline').empty ();
    	var addHeadline = $("input[name=headline]").val();
        $('#headline').append (addHeadline);
    });
    $('#removeheadline').click (function() {
        $('#headline').empty ();
    });
      ///////////////////////
    //Video Thumbnail script//
     ///////////////////////
    $('#addVideoThumbnail').click(function () {
        $('#VideoThumbnail').empty ();
    	var addVideoThumbnail = $("input[name=VideoThumbnail]").val();
        $('#VideoThumbnail').append ('<img src="' + addVideoThumbnail + '" width="580px" height="auto" />');
    });
    $('#removeVideoThumbnail').click (function() {
        $('#VideoThumbnail').empty ();
    });
      //////////////
    //Teaser script//
     //////////////
    $('#addTeaser').click(function () {
        $('#Teaser').empty ();
    	var addTeaser = $("textarea[name=Teaser]").val();
        $('#Teaser').append (addTeaser);
    });
    $('#removeTeaser').click (function() {
        $('#Teaser').empty ();
    }); 
      /////////////////////////
    //YouTube Video URL script//
     /////////////////////////
    $('#addYoutubeURL').click(function () {
        $('#YoutubeURL').empty ();
    	var addYoutubeURL = $("input[name=YoutubeURL]").val();
        $('#YoutubeURL').append ('<a href="'+ addYoutubeURL + '"> Watch the Video »</a>');
    });
    $('#removeYoutubeURL').click (function() {
        $('#YoutubeURL').empty ();
    });
      ////////////////////////
    //Secondary CTA URL script//
     /////////////////////////
    $('#addSecondaryCTA').click(function () {
    	var addSecondaryCTA = $("input[name=SecondaryCTA]").val();
        $('#SecondaryCTA').attr('href', addSecondaryCTA);
    });
    $('#removeSecondaryCTA').click (function() {
        $('#SecondaryCTA').empty ();
    });
      ///////////////////
    //Home Search script//
     ///////////////////
    $('#addHomeSearch').click(function () {
        var addHomeSearch = $("input[name=HomeSearch]").val();
        $('#HomeSearch').attr('href', addHomeSearch);
        
  });
    $('#removeHomeSearch').click (function() {
        $('#HomeSearch').empty ();
    });
    /////////////////////////////
    //Home value location script//
     ///////////////////////////
    $('#addCTALocation').click(function () {
        $('#CTALocation').empty ();
        var addCTALocation = $("input[name=CTALocation]").val();
        $('#CTALocation').append('<b>Full ' + addCTALocation + ' Home Search</b>');
        
  });
    $('#removeHomeValueLocation').click (function() {
        $('#CTALocation').empty ();
    });
      //////////////////
    //Home value script//
     //////////////////
    $('#addHomeValue').click(function () {
        var addHomeValue = $("input[name=HomeValue]").val();
        $('#HomeValue').attr('href', addHomeValue);
        
  });
    $('#removeHomeValue').click (function() {
        $('#HomeValue').empty ();
    });
     //////////////////
    //Client Name script//
     //////////////////
    $('#addClientName').click(function () {
        var addClientName = $("input[name=ClientName]").val();
        $('#ClientName').replaceWith('<p class="color-blue contact-text" style="text-align:center;" id="ClientName">' + addClientName + '</p>');
        
  });
    $('#removeClientName').click (function() {
        $('#ClientName').empty ();
    });
    //////////////////
    //Client Email script//
     //////////////////
    $('#addClientEmail').click(function () {
        var addClientEmail = $("input[name=ClientEmail]").val();
        $('#ClientEmail').replaceWith('<a id="ClientEmail" href="mailto:' + addClientEmail +'">' + addClientEmail + '</a>');
        
  });
    $('#removeClientEmail').click (function() {
        $('#ClientEmail').empty ();
    });
     //////////////////
    //Client Phone script//
     //////////////////
    $('#addClientPhone').click(function () {
        var addClientPhone = $("input[name=ClientPhone]").val();
        $('#ClientPhone').replaceWith('<p class="color-blue  contact-text" style="text-align:center;" id="ClientPhone">' + addClientPhone +'</p>');
        
  });
    $('#removeClientEmail').click (function() {
        $('#ClientEmail').empty ();
    });
     ///////////////////////
    //Client Thumbnail script//
     ///////////////////////
    $('#addClientPhoto').click(function () {
        $('#ClientPhoto').empty ();
    	var addClientPhoto = $("input[name=Color]").val();
        $('#ClientPhoto').append ('<img src="' + addClientPhoto + '" width="130px" />');
    });
    $('#removeClientPhoto').click (function() {
        $('#ClientPhoto').empty ();
    });
    /////////////////
    //color Picker//
    ////////////////
       $('#addColor').click(function () {
    	var addColor = $(".color").val();
        $('rowHeader').append('background-color: #' + addColor';');
    });


});

