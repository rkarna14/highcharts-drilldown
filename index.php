<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HTML Seed</title>
  <meta name="keywords" content="HTML, Seed Project">
  <meta name="description" content="Seed Project for html5">
  <meta name="author" content="Rupak">

  <!--<link rel="stylesheet" href="css/styles.css?v=1.0">-->

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->

  <script src="https://apis.google.com/js/client.js?onload=checkAuth"></script>
</head>

<body>
   <div id="authorize-div" style="display: none">
      <span>Authorize access to Google Sheets API</span>
      <!--Button for the user to click to initiate auth sequence -->
      <button id="authorize-button" onclick="handleAuthClick(event)">
        Authorize
      </button>
    </div>

    <pre id="output"></pre>
    
  <div id="container" style="width:600px;height:400px;"></div>




  <script src="resources/libs/jquery-1.8.2.min.js"></script>
  <script src="resources/libs/highcharts.js"></script>
  <script src="resources/libs/drilldown.js"></script>
  <script src="resources/js/googleSheets.js"></script>
  <script src="resources/js/barDrilldown.js"></script>
</body>
</html>