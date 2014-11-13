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
	
	
    <script type="text/javascript">
<!--
	var s_account="gmbrcore";
	
// -->
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/include/js/brazil.s_code.js"></script>
	<script src="/include/js/main_feuc.js"></script>
	<script>
		google.maps.event.addDomListener(window, 'load', initialize);
	</script>
	

  </head>
  <body>
    <div id="map-canvas"></div>
    <div id="portaoFEUC" style="width: 205px; height: 100px; margin-top: -102px; position: relative; margin-left: 65px; font-weight: bold; display: none; z-index: 2147483647; font-family: Arial, serif; color: #FFF;" onclick="clickIrParaGravatai()">
      Clique Aqui<br>Visite a linha de montagem em Gravatai - RS
    </div>
  </body>
</html>