/* LIGHTBOX INITIALIZATION */
      
$(document).ready(function(e) {
           
    // live handler
      lc_lightbox('.elem', {
      wrap_class: 'lcl_fade_oc',
      gallery : true,	
      thumb_attr: 'data-lcl-thumb', 
                
      skin: 'dark',
      radius: 0,
      padding	: 0,
      border_w: 0,
    });	
        
});




/* -----------draggable and dropable favorites list----------- */

$( function() {
 
  // There's the property and the favourites
  var $property = $( "#property" ),
    $favourites = $( "#favourites" );

  // Let the property items be draggable
  $( "li", $property ).draggable({
    cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move"
  });


  $(document).ready(function() {
    var $property = $( "#property" )
    $("li", $property).on("draggable", function() {
        try {
          $(this).attr('disabled', true);
            var propertyToAdd = $(this).closest("p").attr("id");
  
            var favouritePropertyList = JSON.parse(localStorage.getItem("favouriteProperty"));
            if (favouritePropertyList == null ) {
              favouritePropertyList = [];
              alert("property added to favourites");
            } 
            if (favouritePropertyList != null ) {
                for(var i=0; i<favouritePropertyList.length; i++){
                  if(propertyToAdd == favouritePropertyList[i]){
                    alert("This property is already in your favourite list")
                    favouritePropertyList = [];
                  }
                }
            }
  
            favouritePropertyList.push(propertyToAdd);
  
            localStorage.setItem("favouriteProperty", JSON.stringify(favouritePropertyList));
  
        } catch (e) {
          if (e == QUOTA_EXCEEDED_ERR) {
            console.log("Error: Local Storage limit exceeds");
          } else {
            console.log("Error: Saving to local storage");
          }
        }
    });
  });

  // Let the favourites be droppable, accepting the property items
  $favourites.droppable({
    accept: "#property > li",
    classes: {
      "ui-droppable-active": "ui-state-highlight"
    },
    drop: function( event, ui ) {
      deleteImage( ui.draggable );
    }
  });

  // Let the property be droppable as well, accepting items from the favourites
  $property.droppable({
    accept: "#favourites li",
    classes: {
      "ui-droppable-active": "custom-state-active"
    },
    drop: function( event, ui ) {
      recycleImage( ui.draggable );
    }
    
  });

  // Image deletion function
  var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
  function deleteImage( $item ) {
    $item.fadeOut(function() {
      var $list = $( "ul", $favourites ).length ?
        $( "ul", $favourites ) :
        $( "<ul class='property ui-helper-reset'/>" ).appendTo( $favourites );

      $item.find( "a.ui-icon-favourites" ).remove();
      $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
        $item
          .animate({ width: "48px" })
          .find( "img" )
            .animate({ height: "36px" });
      });
    });
  }

  // Image recycle function
  var favourites_icon = "<a href='link/to/favourites/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-favourites'>Delete image</a>";
  function recycleImage( $item ) {
    $item.fadeOut(function() {
      $item
        .find( "a.ui-icon-refresh" )
          .remove()
        .end()
        .css( "width", "96px")
        .append( favourites_icon )
        .find( "img" )
          .css( "height", "72px" )
        .end()
        .appendTo( $property )
        .fadeIn();
    });
  }



  // Resolve the icons behavior with event delegation
  $( "ul.property > li" ).on( "click", function( event ) {
    var $item = $( this ),
      $target = $( event.target );

    if ( $target.is( "a.ui-icon-refresh" ) ) {
      recycleImage( $item );
    }

    return false;
  });
} );

/* jquery ui tabs for property details*/
$( function() {
  $( "#tabs" ).tabs();
} );


/* ----add to favourites----- */
$(document).ready(function() {
  $("#addFavourites").on("click", function() {
      try {
        $(this).attr('disabled', true);
          var propertyToAdd = $(this).closest("p").attr("id");

          var favouritePropertyList = JSON.parse(localStorage.getItem("favouriteProperty"));
          if (favouritePropertyList == null ) {
            favouritePropertyList = [];
            alert("property added to favourites");
          } 
          if (favouritePropertyList != null ) {
              for(var i=0; i<favouritePropertyList.length; i++){
                if(propertyToAdd == favouritePropertyList[i]){
                  alert("This property is already in your favourite list")
                  favouritePropertyList = [];
                }
              }
          }

          favouritePropertyList.push(propertyToAdd);

          localStorage.setItem("favouriteProperty", JSON.stringify(favouritePropertyList));

      } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
          console.log("Error: Local Storage limit exceeds");
        } else {
          console.log("Error: Saving to local storage");
        }
      }
  });
});
