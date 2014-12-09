<!DOCTYPE html>
<html>
  <head>
    <title>FEUC Virtual</title>
    <meta charset="utf-8">
    
    
	<style type="text/css" media="screen">
      div.scale{
        width:200px;
        height:200px;
        position: relative;
        margin-top: -600px;
        left: 150px;
        display:none;
      }
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#map-canvas, #map_canvas {
  height: 100%;
}

@media print {
  html, body {
    height: auto;
  }

  #map-canvas, #map_canvas {
    height: 650px;
  }
}

#panel {
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left: -180px;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
}

</style>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="/include/js/main_feuc.js"></script>
	<script>
		google.maps.event.addDomListener(window, 'load', initialize);
	</script>
	

  </head>
  <body>
    <div id="map-canvas"></div>
  </body>
</html>