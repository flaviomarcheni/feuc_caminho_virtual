var panorama;
var entryPanoId = null;
var APP =  new Object();
APP.copyright = 'FEUC (c) 2014';
APP.panoInicial = 'entrada_1';
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
          pano: APP.panoInicial,
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
      
     case "entrada_3":
         //testeLog("n")
         return {
           location: {
             pano: 'entrada_3',
             description: 'Lanchonete'
           },
           links: [],
           copyright: APP.copyright,
           tiles: {
             tileSize: new google.maps.Size(tileSizeX, tileSizeY),
             worldSize: new google.maps.Size(worldSizeX, worldSizeY),
             centerHeading: 95,
             getTileUrl: getCustomPanoramaTileUrl
           }
      };
      
     case "entrada_4":
         return {
           location: {
             pano: 'entrada_4',
             description: 'Sala dos professores'
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
     case "entrada_5":
         return {
           location: {
             pano: 'entrada_5',
             description: 'Elevador | Escada'
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
     case "escada":
         return {
           location: {
             pano: 'escada',
             description: 'Escada'
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
     case "corredor_centro":
         return {
           location: {
             pano: 'corredor_centro',
             description: 'CORREDOR | ESCADA'
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
     case "corredor_esquerda":
         return {
           location: {
             pano: 'corredor_esquerda',
             description: 'CORREDOR | ESQUERDA'
           },
           links: [],
           copyright: APP.copyright,
           tiles: {
             tileSize: new google.maps.Size(tileSizeX, tileSizeY),
             worldSize: new google.maps.Size(worldSizeX, worldSizeY),
             centerHeading: 12,
             getTileUrl: getCustomPanoramaTileUrl
           }
      };
      
      case "corredor_direita":
          return {
            location: {
              pano: 'corredor_direita',
              description: 'CORREDOR | DIREITA'
            },
            links: [],
            copyright: APP.copyright,
            tiles: {
              tileSize: new google.maps.Size(tileSizeX, tileSizeY),
              worldSize: new google.maps.Size(worldSizeX, worldSizeY),
              centerHeading: 12,
              getTileUrl: getCustomPanoramaTileUrl
            }
       };
      case "sala":
          return {
            location: {
              pano: 'sala',
              description: 'SALA'
            },
            links: [],
            copyright: APP.copyright,
            tiles: {
              tileSize: new google.maps.Size(tileSizeX, tileSizeY),
              worldSize: new google.maps.Size(worldSizeX, worldSizeY),
              centerHeading: 12,
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
      links.push({//frente
        description : "",
        pano : "entrada_3",
        heading : 0
      });

      links.push({
        description : "",
        pano : "entrada_1",
        heading : 180  //trás
      });
      
      links.push({//direita
          description : "",
          pano : "entrada_5",
          heading : 58
        });
      break;

    case "entrada_3":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//frente
            description : "",
            pano : "entrada_4",
            heading : 0
          });

          links.push({
            description : "",
            pano : "entrada_2",
            heading : 180  //trás
          });
          break;

          
    case "entrada_4":
          links.push({
            description : "",
            pano : "entrada_3",
            heading : 180  //trás
          });
          break;
          
    case "entrada_5":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//frente
            description : "",
            pano : "escada",
            heading : 0
          });

          links.push({
            description : "",
            pano : "entrada_2",
            heading : 270  //direita
          });
          break;
    case "escada":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//frente
            description : "",
            pano : "corredor_centro",
            heading : 0
          });

          links.push({
            description : "",
            pano : "entrada_5",
            heading : 65  //direita
          });
          break;
          
    case "corredor_centro":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//frente
            description : "",
            pano : "corredor_direita",
            heading : 0
          });

          links.push({
            description : "",
            pano : "escada",
            heading : 100  //direita
          });
          
          links.push({
              description : "",
              pano : "corredor_esquerda",
              heading : 180  //trás
            });
          
          
          links.push({
              description : "",
              pano : "sala",
              heading : 310  //trás
            });
          break;

    case "corredor_esquerda":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//frente
            description : "",
            pano : "corredor_centro",
            heading : 0
          });
        break;
       
    case "corredor_direita":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//trás
            description : "",
            pano : "corredor_centro",
            heading : 210
          });
        break;
    
    case "sala":
        OmnitureChamada("ch:la:BR:pt:index:chevrolet-world:streetview:center-design")
          links.push({//trás
            description : "",
            pano : "corredor_centro",
            heading : 40
          });
        break;
  }
}

