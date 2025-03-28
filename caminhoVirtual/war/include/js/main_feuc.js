var panorama;
var APP =  new Object();
APP.copyright = 'FEUC (c) 2014';
APP.panoInicial = 'entrada_1';
var latBase = -22.898633;
var lonBase = -43.554502;
	
  //Corresponde ao tamanho da  imagem em largura
  var  worldSizeX = 9728;
//Corresponde ao tamanho 	da  imagem em altura
  var  worldSizeY = 4864;
  //Corresponde de cada  tile em largura
  var tileSizeX  = 9728;
  //Corresponde de cada  tile em altura
  var tileSizeY = 4864;
 
  
  var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform'];
  var prop = properties[0];

/* Iterators and stuff */    
  var i,j,t;


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

    //adiciona a instancia do mapa no DOM
    var map = new google.maps.Map(mapDiv, {
        center: Latlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
       });

    //Adiciona o marcador no mapa
    var marker = new google.maps.Marker({
        map : map,
        position : Latlng,
        draggable : false
       
      });    
    
    // Ao clicar no marker abre o steetView
    google.maps.event.addListener(marker, 'click', function () {
        panorama.setOptions(panoOptions2);
    });

    	// Cria a instancia do StreetView
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
	  
	  


}

//Toda vez que é feita a troca de imagens na navegação, este método é chamado e retorna a imagem de acordo com o nome do pano
function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
  var img = "/include/images/feuc/" + pano + '.jpg';
  return img;
}
// Definição de cada pano
// Pano leia-se imgens usados no caminho virtual.
function getCustomPanorama(pano, zoom, tileX, tileY) {
  switch(pano){
   
	 case "entrada_1":
      return {
        location: {
          pano: 'entrada_1',
          description: 'Entrada'
        },
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
        copyright: APP.copyright,
        tiles: {
          tileSize: new google.maps.Size(tileSizeX, tileSizeY),
          worldSize: new google.maps.Size(worldSizeX, worldSizeY),
          centerHeading: 265,
          getTileUrl: getCustomPanoramaTileUrl
        }
      };
      
     case "entrada_3":
         return {
           location: {
             pano: 'entrada_3',
             description: 'Lanchonete'
           },
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



//Função reponsável por adicionar os controles de navegação em cada imagem de acordo com o nome do pano.
function createCustomLinks(entryPanoId) {
  var links = panorama.getLinks();
  var panoID = panorama.getPano();
  // frente 0
  // lado esquerdo 270
  // lado direito 90
  // baixo 180
  switch(panoID) {
    case "entrada_1":
      links.push({
        description : "Venha conhecer a FEUC",
        pano : "entrada_2",
        heading : 0
      });
      break;
    case "entrada_2":
      links.push({//frente
        description : "Cantina",
        pano : "entrada_3",
        heading : 0
      });
      links.push({
        description : "Voltar",
        pano : "entrada_1",
        heading : 180  //trás
      });
      
      links.push({//direita
          description : "Escada",
          pano : "entrada_5",
          heading : 58
        });
      break;
    case "entrada_3":
          links.push({//frente
            description : "Sala dos professores",
            pano : "entrada_4",
            heading : 0
          });

          links.push({
            description : "Voltar",
            pano : "entrada_2",
            heading : 180  //trás
          });
          break;

          
    case "entrada_4":
          links.push({
            description : "Voltar",
            pano : "entrada_3",
            heading : 180  //trás
          });
          break;
          
    case "entrada_5":
          links.push({//frente
            description : "Subir",
            pano : "escada",
            heading : 0
          });

          links.push({
            description : "Voltar",
            pano : "entrada_2",
            heading : 270  //esquerda
          });
          break;
    case "escada":
          links.push({//frente
            description : "Subir",
            pano : "corredor_centro",
            heading : 0
          });

          links.push({
            description : "Voltar",
            pano : "entrada_5",
            heading : 65  //direita
          });
          break;
          
    case "corredor_centro":
          links.push({//frente
            description : "Final do corredor",
            pano : "corredor_direita",
            heading : 0
          });

          links.push({
            description : "Voltar",
            pano : "escada",
            heading : 100  //direita
          });
          
          links.push({
              description : "Início do corredor",
              pano : "corredor_esquerda",
              heading : 180  //trás
            });
          
          
          links.push({
              description : "Entrar no Lab D",
              pano : "sala",
              heading : 310  //trás
            });
          break;

    case "corredor_esquerda":
          links.push({//frente
            description : "Voltar",
            pano : "corredor_centro",
            heading : 0
          });
        break;
       
    case "corredor_direita":
          links.push({//trás
            description : "Voltar",
            pano : "corredor_centro",
            heading : 210
          });
        break;
    
    case "sala":
          links.push({//trás
            description : "Voltar",
            pano : "corredor_centro",
            heading : 40
          });
        break;
  }
}

