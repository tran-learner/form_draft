<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="validation1_style.css">
    <script src="https://kit.fontawesome.com/da3eaded38.js" crossorigin="anonymous"></script>
</head>

<body>
    <h1>Go Learn</h1>



    <div class="tabs_bar">
        <div class="tab-item active">
            <i class="fa-solid fa-right-to-bracket"></i>
            Login
        </div>

        <div class="tab-item">
            <i class="fa-solid fa-pen-to-square"></i>
            Sign up
        </div>

        <div class="tab-item">
            <i class="fa-solid fa-question"></i>
            Help
        </div>

        <div class="tab-item">
            <i class="fa-solid fa-circle-info"></i>
            About us
        </div>
    </div>

    <div class="tabs_content">
        <div class="tab_pane  active">
            <h2>Login</h2>
        </div>

        <div class="tab_pane">
            <?php include 'signup_form.html'; ?>
        </div>

        <div class="tab_pane text_pane">
            <h2>Help section</h2>
            <?php 
            $file_path = __DIR__.'/Help.txt';
            if (file_exists($file_path)){
                $file_content = file_get_contents($file_path);
                echo "<p>". nl2br(htmlspecialchars($file_content)). "</p>";
            } else echo "<p>Text not available.</p>"

            ?>
        </div>

        <div class="tab_pane text_pane">
            <h2>About us</h2>
            <?php
            $file_path = __DIR__ . '/About us.txt';

            if (file_exists($file_path)) {
                $file_content = file_get_contents($file_path);
                echo "<p>" . nl2br(htmlspecialchars($file_content)) . "</p>";
            } else {
                echo "<p>Text cannot be displayed.</p>";
            }
            ?>
        </div>
    </div>

    <script src="/tabs_ui.js"></script>
</body>

</html>