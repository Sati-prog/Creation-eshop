<?php

$route = $_GET['route'];

require 'templates/header.php';

if ($route == '') {

    require 'templates/main.php';
}

switch ($route) {
    case '':
        require 'templates/main.php';
        break;
    case 'cart':
        require 'templates/cart.php';
        break;
}

require 'templates/footer.php';