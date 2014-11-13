var panorama;
var entryPanoId = null;
var APP =  new Object();
APP.copyright = 'FEUC (c) 2014';

var latBase = -22.898633;
var lonBase = -43.554502;

  var  worldSizeX = 9728;
  var  worldSizeY = 4864;

  var tileSizeX  = 9728;
  var tileSizeY = 4864;
 
  
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform'];
  var prop = properties[0];

/* Iterators and stuff */    
  var i,j,t;



function testeLog(status){
  if (status == "n"){
    document.getElementById('portaoFEUC').style.display = "none";
  }else{
    testeLog("n")
    document.getElementById(status).style.display = "block";
  }
}

function OmnitureChamada(pano_nome){
  if(pano_nome == "block"){
    return
  }

  if(typeof(Omniture_s) != "undefined"){
    Omniture_s.server = window.location.hostname;

    Omniture_s.channel = "google-street-view";
   
    Omniture_s.eVar18 = "Chevrolet";
   
    Omniture_s.eVar31 = "brazil";
   
    Omniture_s.eVar32 = "lat-am";
   
    Omniture_s.eVar4 = "pt";
   
    Omniture_s.hier1 = "google-street-view";
   
    Omniture_s.pageName = pano_nome;

    Omniture_s.prop18 = "Chevrolet";
   
    Omniture_s.prop23 = "pt";

  }

  if(typeof(Omniture_s) != "undefined"){
    var s_code=Omniture_s.t();if(s_code)document.write(s_code)
  }
}


function initialize() {
/* Find out which CSS transform the browser supports */
var stage = document.getElementById('map-canvas');
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      break;
    }
  }


    var mapDiv = document.getElementById('map-canvas');
    var Latlng = new google.maps.LatLng( latBase, lonBase );

    var map = new google.maps.Map(mapDiv, {
        center: Latlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
       });

    var marker = new google.maps.Marker({
        map : map,
        position : Latlng,
        draggable : false
      });    
    
    google.maps.event.addListener(marker, 'click', function () {
        panorama.setOptions(panoOptions2);
    });

      panorama = map.getStreetView();
        var panoOptions2 = {
          pov: {
            heading: 0,
            pitch: 0,
            zoom: 0
          },
          pano: 'entrada_2',
          //position: Latlng,
          visible: true,
          panoProvider: getCustomPanorama
      };


      var panoOptions = {
          position: Latlng,
          visible: true,
          pov: {
            heading: 0,
            pitch: 0,
            zoom: 0
          },
          panoProvider:  getCustomPanorama
      };     
    
      var streetviewService = new google.maps.StreetViewService();
      var radius = 20;

      streetviewService.getPanoramaByLocation(Latlng, radius,
        function(result, status) {
          if (status == google.maps.StreetViewStatus.OK) {
            google.maps.event.addListener(panorama, 'links_changed', function() {
              createCustomLinks(result.location.pano);
            });
          }
      });
	  
	  
	  // LIMITAR ZOOM
//-----------------------------------------------------


google.maps.event.addListener(panorama, 'pano_changed', function() {
 setTimeout( function () { map.getStreetView().setZoom(0); } );
});
}
// Return a pano image given the panoID.
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
  console.log(img);
  var img = "/include/images/feuc/" + pano + '.jpg';
	
 return img;
//  return 'images/centro-design/'+pano+'-'+zoom+'-'+tileY+'-'+tileX+'_s1.jpg';
}

// Construct the appropriate StreetViewPanoramaData given
// the passed pano IDs.
function getCustomPanorama(pano, zoom, tileX, tileY) {
  switch(pano){
   
 
	 case "entrada_1":
      return {
        location: {
          pano: 'entrada_1',
          description: 'Entrada'
        },
        links: [],
        copyright: APP.copyright,
        tiles: {
          tileSize: new google.maps.Size(tileSizeX, tileSizeY),
          worldSize: new google.maps.Size(worldSizeX, worldSizeY),
          centerHeading: 0,
          getTileUrl: getCustomPanoramaTileUrl
        }
      };

     case "entrada_2":
      //testeLog("n")
      return {
        location: {
          pano: 'entrada_2',
          description: 'Pátio'
        },
        links: [],
        copyright: APP.copyright,
        tiles: {
          tileSize: new google.maps.Size(tileSizeX, tileSizeY),
          worldSize: new google.maps.Size(worldSizeX, worldSizeY),
          centerHeading: 265,
          getTileUrl: getCustomPanoramaTileUrl
        }
      };
  
  }
}



function createCustomLinks(entryPanoId) {
  /*
   * add links
   */
  var links = panorama.getLinks();
  var panoID = panorama.getPano();
  

  // frente 0
  // lado esquerdo 270
  // lado direito 90
  // baixo 180
  switch(panoID) {
  
    case entryPanoId:
      // Adding a link in the view from the entrance of the building to
      // reception.
      links.push({
        heading: 0,
        description : '',
        pano : 'centro_design'
      });
      break;

    case "entrada_1":
      OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:started-map")
      links.push({
        description : "Venha conhecer a FEUC",
        pano : "entrada_2",
        heading : 0
      });
      break;


    case "entrada_2":
    OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
      links.push({
        description : "",
        pano : "entrada_3",
        heading : 0
      });

      links.push({
        description : "",
        pano : "entrada_1",
        heading : 180
      });
      break;


      // Esquerda < Direita >
    case "centro_design2":
      links.push({
        description : "",
        pano : "centro_design1",
        heading : 180
      });

      links.push({
        description : "",
        pano : "centro_design3",
        heading : 80
      });
      break;


  // frente 0
  // lado esquerdo 270
  // lado direito 90
  // baixo 180

    // Esquerda < Frente ^ Direita >
    case "centro_design3":
      links.push({
        description : "",
        pano : "centro_design2",
        heading : 180 //baixo 250
      });

      links.push({
        description : "Estúdio criativo",
        pano : "centro_design4",
        heading : 270 //esquerda 340
      });

      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design15A",
        heading : 0 //cima 70
      });
      break;


    // Esquerda < Direita >
    case "centro_design4":
      links.push({
        description : "",
        pano : "centro_design3",
        heading : 120
      });

      links.push({
        description : "Estúdio Clay",
        pano : "centro_design5",
        heading : 355
      });
      break;


    // Esquerda < Direita >
    case "centro_design5":
      links.push({
        description : "Estúdio criativo",
        pano : "centro_design4",
        heading : 180
      });

      links.push({
        description : "Estúdio Clay - Exterior",
        pano : "centro_design6",
        heading : 0
      });
      break;
//340

    // Esquerda < Frente ^ Direita >
    case "centro_design6":
      links.push({
        description : "Estúdio Clay - Interior",
        pano : "centro_design5",
        heading : 180
      });

      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design7",
        heading : 320
      });
      break;


    // Esquerda < Frente ^ Direita >
    case "centro_design7":
      links.push({
        description : "Color & Trim",
        pano : "centro_design16",
        heading : 360
      });

      links.push({
        description : "",
        pano : "centro_design8",
        heading : 85
      });

      links.push({
        description : "Estúdio Clay",
        pano : "centro_design6",
        heading : 173
      });

      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design10",
        heading : 270
      });
      break;


          // Esquerda < Frente ^ Direita >
    case "centro_design7A":
      links.push({
        description : "Color & Trim",
        pano : "centro_design16",
        heading : 360
      });

      links.push({
        description : "",
        pano : "centro_design8",
        heading : 85
      });

      links.push({
        description : "Estúdio Clay ",
        pano : "centro_design6",
        heading : 173
      });

      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design10",
        heading : 270
      });
      break;

      case "centro_design7B":
      links.push({
        description : "Color & Trim",
        pano : "centro_design16",
        heading : 360
      });

      links.push({
        description : "",
        pano : "centro_design8",
        heading : 85
      });

      links.push({
        description : "Estúdio Clay",
        pano : "centro_design6",
        heading : 173
      });

      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design10",
        heading : 270
      });
      break;


    // Esquerda < Frente ^ Direita >
    case "centro_design8":
      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design7",
        heading : 270
      });

      links.push({
        description : "Sala de realidade virtual",
        pano : "centro_design9",
        heading : 38
      });

      links.push({
        description : "",
        pano : "centro_design15",
        heading : 160
      });
      break;


          // Esquerda < Frente ^ Direita >
    case "centro_design8A":
      links.push({
        description : "Chevrolet Tracker",
        pano : "centro_design7",
        heading : 230
      });

      links.push({
        description : "Sala de realidade virtual",
        pano : "centro_design9",
        heading : 38
      });

      links.push({
        description : "",
        pano : "centro_design15",
        heading : 143
      });
      break;


    case "centro_design9":
      links.push({
        description : "",
        pano : "centro_design8A",
        heading : 180
      });
      break;


    // Esquerda < Frente ^ Direita >
    case "centro_design10":
    OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:car-tracker")
      links.push({
        description : "Interior",
        pano : "centro_design11",
        heading : 180
      });

      links.push({
        description : "",
        pano : "centro_design12",
        heading : 110
      });

      links.push({
        description : "",
        pano : "centro_design14",
        heading : 250
      });

      links.push({
        description : "Voltar",
        pano : "centro_design7",
        heading : 0
      });
      break;


    case "centro_design11":
      links.push({
        description: "",
        pano: "centro_design13",
        heading:180
      });

      links.push({
        description: "",
        pano: "centro_design14",
        heading:270
      });

      links.push({
        description: "",
        pano: "centro_design10",
        heading:0
      });

      links.push({
        description: "",
        pano: "centro_design12",
        heading:90
      });
    break;

    case "centro_design12":
      links.push({
        description: "Interior",
        pano: "centro_design11",
        heading:280
      });

      links.push({
        description: "",
        pano: "centro_design10",
        heading:355
      });

      links.push({
        description: "",
        pano: "centro_design13",
        heading:210
      });
    break;

    case "centro_design13":
      links.push({
        description: "Interior",
        pano: "centro_design11",
        heading:0
      });

      links.push({
        description: "",
        pano: "centro_design12",
        heading:70
      });

      links.push({
        description: "",
        pano: "centro_design14",
        heading:290
      });
    break;

       case "centro_design13A":
      links.push({
        description: "",
        pano: "centro_design11",
        heading:0
      });

      links.push({
        description: "",
        pano: "centro_design12",
        heading:70
      });

      links.push({
        description: "",
        pano: "centro_design14",
        heading:280
      });
    break;

    case "centro_design14":
      links.push({
        description: "Interior",
        pano: "centro_design11",
        heading:85
      });

      links.push({
        description: "",
        pano: "centro_design13A",
        heading:160
      });

      links.push({
        description: "",
        pano: "centro_design10",
        heading:0
      });
    break;

    case "centro_design15A":
      links.push({
        description: "",
        pano: "centro_design3",
        heading:180
      });

      links.push({
        description: "Chevrolet Tracker",
        pano: "centro_design8",
        heading:0
      });
    break;

    case "centro_design15":
/*      links.push({
        description: "",
        pano: "centro_design8",
        heading:180
      });

      links.push({
        description: "",
        pano: "centro_design3",
        heading:0
      });*/


      links.push({
        description: "",
        pano: "centro_design3",
        heading:180
      });

      links.push({
        description: "Chevrolet Tracker",
        pano: "centro_design8",
        heading:0
      });

    break;

    case "centro_design16":
      links.push({
        description: "",
        pano: "centro_design7B",
        heading:180
      });
    break;




    // Frente ^
    case "gravatai":
    OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:factory-visit")
      links.push({
        description : "",
        pano : "gravatai2",
        heading : 0
      });

      links.push({
        description : "",
        pano : "centro_design13",
        heading : 180
      });
      break;

      // Baixo \/ Direita > 
    case "gravatai2":
      links.push({
        description : "",
        pano : "gravatai",
        heading : 90
      });

      links.push({
        description : "",
        pano : "gravatai3",
        heading : 0
      });
      break;


    // Esquerda < Direita > 
    case "gravatai3":
      links.push({
        description : "",
        pano : "gravatai2",
        heading : 180
      });

      links.push({
        description : "",
        pano : "gravatai4",
        heading : 0
      });
      break;


    // Esquerda < Direita > 
    case "gravatai4":
      links.push({
        description : "",
        pano : "gravatai3",
        heading : 180
      });

      links.push({
        description : "",
        pano : "gravatai5",
        heading : 0
      });
      break;


    // Esquerda < Direita > 
    case "gravatai5":
      links.push({
        description : "",
        pano : "gravatai4",
        heading : 90
      });

      links.push({
        description : "",
        pano : "gravatai6",
        heading : 0
      });
      break;


      // Esquerda < Direita > 
    case "gravatai6":
      links.push({
        description : "",
        pano : "gravatai5",
        heading : 180
      });

      links.push({
        description : "",
        pano : "gravatai7",
        heading : 340
      });
      break;


    // Esquerda < Direita > 
    case "gravatai7":
      links.push({
        description : "",
        pano : "gravatai8",
        heading : 0
      });

      links.push({
        description : "",
        pano : "gravatai6",
        heading : 180
      });
      break;


      // Esquerda < Direita > 
    case "gravatai8":
      links.push({
        description : "",
        pano : "gravatai9",
        heading : 320
      });

      links.push({
        description : "",
        pano : "gravatai7",
        heading : 45
      });
      break;


    // Esquerda < Direita > 
    case "gravatai9":
      links.push({
        description : "",
        pano : "gravatai10",
        heading : 0
      });

      links.push({
        description : "",
        pano : "gravatai8",
        heading : 280
      });
      break;


    // Esquerda < Direita > 
    case "gravatai10":
      links.push({
        description : "",
        pano : "gravatai11",
        heading : 0
      });

/*      links.push({
        description : "Retorne ao Centro Global de Design GM",
        pano : "centro_design0",
        heading :270
      });*/

      links.push({
        description : "",
        pano : "gravatai9",
        heading : 180
      });
      break;


      case "gravatai10A":
      links.push({
        description : "",
        pano : "gravatai11",
        heading : 90
      });

      links.push({
        description : "Retorne ao Centro de Design GM",
        pano : "centro_design0",
        heading :0
      });

      links.push({
        description : "",
        pano : "gravatai9",
        heading : 270
      });
      break;


      // Esquerda < Direita > 
    case "gravatai11":
      links.push({
        description : "",
        pano : "gravatai10A",
        heading : 180
      });
      break;


      // Esquerda < Direita > 
    case "gravatai12":
      links.push({
        description : "",
        pano : "gravatai10",
        heading : 0
      });

      break;


      // Esquerda < Direita > 
    case "gravatai13":
      links.push({
        description : "",
        pano : "gravatai10",
        heading : 0
      });

      break;


    // ----------------------------------------------------------------------------------------------
  }
}

