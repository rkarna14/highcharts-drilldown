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
   <div id="authorize-div" style="display: block">
      <span>Access google api</span>
      <!--Button for the user to click to initiate auth sequence -->
      <button id="authorize-button" onclick="handleAuthClick(event)">
        Authorize
      </button>
    </div>

    <pre id="output"></pre>
    <div id="google-sheet-link" style="display: none">
      <a href="https://docs.google.com/spreadsheets/d/1LNy4spXbG7JAIU-ApTDINfXuNUilAapofN1zyJ9ezB0/edit?usp=sharing">Google Sheet Used</a>
    </div>
    <div id="container" style="width:1000px;height:600px;"></div>
    
  
  <script src="resources/libs/jquery-1.8.2.min.js"></script>
  <script src="resources/libs/highcharts.js"></script>
  <script src="resources/libs/drilldown.js"></script>
  <script src="resources/js/googleSheets.js"></script>
  <script src="resources/js/barDrilldownDynamic.js"></script>
</body>
</html>