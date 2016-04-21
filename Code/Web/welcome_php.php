<html>
<head>
<title>Stuff</title>
<link href="style_backend.css" rel="stylesheet" type="text/css">
</head>
<body>
<?php

echo "Your IP is ";

//$localIP = getHostByName(php_uname('n'));
//echo $localIP;

//might need to try something like this on the pi to get the correct IP:
$command="/sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}'";
$localIP = exec ($command);
echo $localIP;

?><br><br>
<div id="welcome2" class="welcome2">
This is a test<br><br>

iOS: <img src="qrcode_ios.png"><br><br>
Android: <img src="qrcode_android.png"></div>
<div class="continue" id="continue"><a href="welcome2.html">continue ></a></div>
</body>
</html>