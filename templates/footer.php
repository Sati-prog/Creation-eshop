    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script> -->
    <script src="js/jquery.min.js"></script>

    <?php
        switch ($route) {
            case '':
                echo '<script src="js/script.js"></script>';
                break;
            case 'cart':
                echo '<script src="js/cart.js"></script>';
                break;
        }
    ?>
</body>
</html>