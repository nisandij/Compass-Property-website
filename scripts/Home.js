
/* selecting the property type */
//$( function() {
  //$( "#type" ).selectmenu();
  //} );
 
  
     
  
/* selecting maximum no.of beds */
  $(function () {
      $("#maxBeds").spinner ({
          min: 1,
          max: 5,
          spin: function (event, ui) {
              $(this).change();
          }
      });
  });

 /* selecting minimum and maximum no.of beds */ 
  $(function () {
      $("#minBeds").spinner ({
          min: 1,
          max: 5,
          spin: function (event, ui) {
              $(this).change();
          }
      });
  });

/* selecting date */
  $( function() {
  $( "#time" ).selectmenu();
  });


  /* selecting price range */
  $( function() {
    $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 800000,
    values: [ 300000, 600000 ],
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );



     function showSearch() {
        var y = document.getElementById("placeholder");
        if (y.style.display === "none" ) {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
    } 

    var data = {
        "properties": [
       {
           "id":"prop1",
           "type":"House",
           "bedrooms":3,
           "price":650000,
           "tenure":"Freehold",
           "description":"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
           "location":"Petts Wood Road, Petts Wood, Orpington",
           "picture":"images/prop1pic1small.jpg",
           "url":"propertyOne.html",
           "added": {
               "month":"March",
               "day":12,
               "year":2019
           }
       },
       {
           "id":"prop2",
           "type":"Flat",
           "bedrooms":2,
           "price":299995,
           "tenure":"Freehold",
           "description":"Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop2pic1small.jpg",
           "url":"propertyTwo.html",
           "added": {
               "month":"September",
               "day":14,
               "year":2019
           }
       },
       {
           "id":"prop3",
           "type":"House",
           "bedrooms":5,
           "price":590000,
           "tenure":"Freehold",
           "description":"This cozy cottage house offers a large family area convenient to the kitchen and dining areas while still maintaining an 'air' of formality. There are plenty of exterior views and numerous covered areas to retreat to and enjoy the outdoors. The master suite offers some flexibility depending on the owners' preference, view opportunities or privacy concerns. The kitchen and dining areas were located at the rear for the family who finds themselves more oriented to barbecuing and porch sitting - including a back lanai fireplace. The arrangement of the family and kitchen areas provides the ability to enjoy multiple entertaining opportunities. The master bath is bathed in natural light from high windows, and enjoys a large vanity with dual sinks and a large walk-in closet as well. The secondary bedrooms also have walk-in closets as well as direct bath access. A bonus area over the garage makes a great place to create a media room environment for the hardcore theatre room buff. It could also accommodate additional bedrooms or a guest suite.",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop3pic1small.jpg",
           "url":"propertyThree.html",
           "added": {
               "month":"February",
               "day":25,
               "year":2019
           }
       },
       {
           "id":"prop4",
           "type":"Apartment",
           "bedrooms":2,
           "price":389995,
           "tenure":"Freehold",
           "description":"A cushiony grey modular sofa and silver grey rug mark out a lounge area in the home’s open plan living space. Black bedroom pendant lights meld moodily with the darker side of the room. 2 bedrooms, with black designer table lamp over in the lighter half is the Atollo lamp. Slatted wardrobe doors leak ambient light into the bedroom. Heavy grey drapes frame the bedroom window, where sheer white drapes provide privacy. The glass closet helps the room feel larger, and its light boxes supply extra lighting. Luxurious marble tiles bathroom. The extendable dining table provides a flexible solution for the small space.",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop4pic1small.jpg",
           "url":"propertyFour.html",
           "added": {
               "month":"January",
               "day":8,
               "year":2019
           }
       },
       {
           "id":"prop5",
           "type":"Apartment",
           "bedrooms":1,
           "price":399995,
           "tenure":"Freehold",
           "description":"The colour explosion fills striking orange and blue bedroom designs, modern colour blocked kitchen schemes, and powerful bathroom palettes. Cool, calming light grey accents, crisp white surrounds and warming woodtone balance out the combinations. A border of blue colour blocking wraps the master bedroom, which spills over onto skirting boards and colour matched closets. A unique bedroom pendant light hangs like a sleeping chrysalis over the bedside. Bright orange tiles create a buzz in the bathroom scheme. The ensuite features a unique bathroom sink unit with bright orange framework. A slipper bathtub is colour coordinated with a textured focal wall. Baby blue kitchen cabinets and a matching blue tile countertop interact with a white mosaic backsplash and floor. A single ruby red cabinet provides a pop of contrast. Curtains can be drawn between the kitchen and the dining area to hide away cooking mess during dinner parties.",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop5pic1small.jpg",
           "url":"propertyFive.html",
           "added": {
               "month":"August",
               "day":21,
               "year":2019
           }
       },
       {
           "id":"prop6",
           "type":"Apartment",
           "bedrooms":4,
           "price":698000,
           "tenure":"Freehold",
           "description":"A grand layout with an equally impressive and unique facade means that this marvelous modern home is a true rarity. Boasting 4,683 square feet of space, this plan is grand in every sense of the word. From its 4 bedrooms, each of which has a private en-suite and walk-in closet, to its stately features like the sweeping grand staircase and totally open living room and kitchen, every inch of this plan is breathtaking. And while the first level provides a full guest suite along with all of the main rooms, the second houses the master as well as a bonus room and the auxiliary bedrooms for the kids.",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop6pic1small.jpg",
           "url":"propertySix.html",
           "added": {
               "month":"July",
               "day":14,
               "year":2019
           }
       },
       {
           "id":"prop7",
           "type":"House",
           "bedrooms":3,
           "price":799500,
           "tenure":"Freehold",
           "description":"Lush greenery fans around the outskirts of the House, growing a feeling of closeness with nature. Greenery is the beating heart, along with traditional wicker accents, authentic rugs and heavy rich wood furniture. Large expanses of glass and cut away ceilings bring in clear skies and the feeling of blissful freedom.Rustic round coffee tables are clustered together on a Balinese rug to introduce a moment of tradition and warmth to the centre of the crisp whilte sunken lounge. A six seat dining set comes next in the open plan, before a kitchen with a square dining island. 3 bedrooms with a tiered master bedroom overlooks the private outdoor swimming pool.A sliver of open sky spills into the 2 luxury bathroom.",
           "location":"Crofton Road Orpington BR6",
           "picture":"images/prop7pic1small.jpg",
           "url":"propertySeven.html",
           "added": {
               "month":"October",
               "day":24,
               "year":2019
           }
       }
   ]}

    $(document).ready(function(){
        $("#search").on("click",function(){
            var propertyType = $( "#types" ).val();
            var minimumBeds = $("#minBeds").val();
            var maximumBeds = $("#maxBeds").val();
            var date = $("#time").val();
            var minimumPrice =  $("#slider-range").slider("option", "values")[0];
            var maximumPrice = $("#slider-range").slider("option", "values")[1];
            var output="<ul>";
        for (var i in data.properties) {
            if(( propertyType == data.properties[i].type) || ( propertyType == "Any") ) {
                if ((minimumBeds <= data.properties[i].bedrooms) && (maximumBeds >= data.properties[i].bedrooms) ) {
                    if (( date == data.properties[i].added.month) || (date =="Anytime")) {
                        if (( maximumPrice >= data.properties[i].price ) && (minimumPrice <= data.properties[i].price)) {
             
                            output += "<fieldset>"+"<li>" + "<img src=" +  data.properties[i].picture +  ">" +
													"<h2>" + "Price: £" + data.properties[i].price + "</h2>" +
													"<h3>" + "Property Type: " + data.properties[i].type + "</h3>" +
													" <p>" + "Location: " + data.properties[i].location + "</p>" +
													"<p>" + "No.of Bedrooms: " + data.properties[i].bedrooms + "</p>" +
										  			"<p>" + "<a href=" + data.properties[i].url +">" + "Visit Page" +"</a>" + "</p>" + "</li>" +"</fieldset>"
                        } 
                    }
                }
            }
        }
        output+="</ul>";

        document.getElementById("placeholder").innerHTML=output;
        $("#placeholder").css({"background-image" : "linear-gradient( to right, rgba(255, 255, 255), rgb(186, 236, 245),  rgba(255, 255, 255)", 
        "margin": "auto", "width": "50%", "padding": "30px 35px 30px 0",  "top": "250px", "position": "relative"});
        });

    });


    $(document).ready(function() {
        $("#favourites").on("click", function(){
            favouritePropertyList = JSON.parse(localStorage.getItem("favouriteProperty"));
            var output = "<ul>";
            var z = document.getElementById("placeholderFavourites");
                
                if (favouritePropertyList != null) {
                    for (var i = 0; i < data.properties.length; i++) {
                        for (j=0; j < favouritePropertyList.length; j++) {
                            if (data.properties[i].id == favouritePropertyList[j]) {
                                output += "<fieldset>" + "<li>" + "<img src=" +  data.properties[i].picture +  ">" +
                                                "<h3>" + data.properties[i].type + "</h3>" +
                                                " <p>" + data.properties[i].location + "</p>" +
                                                  "<p>" + "<a href=" + data.properties[i].url +">" + "Visit Page" +"</a>" + "</p>" + "</li>" + "</fieldset>"
                            }
                        }
                    }
                }


                output +- "<ul>";
                    document.getElementById("placeholderFavourites").innerHTML = output;
                    $("#placeholderFavourites").css({"background-image" : "linear-gradient( to right, rgba(255, 255, 255), rgb(186, 236, 245), rgba(255, 255, 255)",
                     "margin": "auto" , "width": "50%", "padding": "30px 35px 30px 0", "top": "100px", "margin-bottom": "50px", "position": "relative"});
        
            if (z.style.display === "none") {
                z.style.display = "block";
            } else {
                z.style.display = "none";
               
            }
        });
    });


    $(function () {
        $("#clear").on("click", function () {
            localStorage.clear();
            location.reload();
        });
    });

    $( function() {
        $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
          _renderItem: function( ul, item ) {
            var li = $( "<li>" ),
              wrapper = $( "<div>", { text: item.label } );
     
            if ( item.disabled ) {
              li.addClass( "ui-state-disabled" );
            }
     
            $( "<span>", {
              style: item.element.attr( "data-style" ),
              "class": "ui-icon " + item.element.attr( "data-class" )
            })
              .appendTo( wrapper );
     
            return li.append( wrapper ).appendTo( ul );
          }
        });
     
     
        $( "#types" )
          .iconselectmenu()
          .iconselectmenu( "menuWidget" )
            .addClass( "ui-menu-icons customicons" );
     
        
      } );
