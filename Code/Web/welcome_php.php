<html>
<head>
<title>Stuff</title>
<link href="style_backend.css" rel="stylesheet" type="text/css">
</head>
<body>
<?php

echo "<p style='text-size:80px;'>Your IP is </p>";

//$localIP = getHostByName(php_uname('n'));
//echo $localIP;

//might need to try something like this on the pi to get the correct IP:
$command="/sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'";
$localIP = exec ($command);
echo "<p style='text-size:80px;'>".$localIP."</p>";

?><br><br>
<div id="welcome2" class="welcome2">
<h1>iOS: <img src="qrcode_ios.png"><br><br><br>
Android: <img src="qrcode_android.png"></h1></div>
<div class="continue" id="continue"><a href="welcome2.html">continue ></a></div>
</body>
</html>