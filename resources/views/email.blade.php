<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/email.css')}}">
    <title>email</title>
    <link rel = "icon" type = "image/png" href = "name-of-image.png">

</head>
<body>
    <div class="col-5 col-s-5 container">
        <div class="row">
            <div class="col-12 col-s-12 imgs">
                    <h1 id="headertext" style="color: rgb(233, 55, 55)">MLhuillier OEX Site Notification</h1>
            </div>
            <hr id="hr1">
            <img class="logo" src="https://play-lh.googleusercontent.com/OcV8yyAyw8x91UxgBDpYE5A-awtgaXTYOVoJUN8QQp2dtRS25xdcYwWFtYmI0LiZhSk" alt="">
            <div class="col-12 col-s-12 div2">
                <h1 id="h1text" style="color: rgb(28, 7, 104)">Password Reset</h1>
                <p style="font-size: 15px;">Note: Please click the button below to reset your password.</p>
                <a href="{{url('https://examapp-backend.herokuapp.com/')}}">https://examapp-backend.herokuapp.com/</a>
                <p style="font-size: 15px;">If you click the button you will be redirected to another page.</p><br>
                <p style="font-size: 15px">Best Regards,</p>
                <p style="padding-bottom: 30px; font-size: 15px; font-weight:bold;"font-size: 15px">ML EOX</p>
            </div>
            <hr id="hr2">
            <div class="col-12 col-s-12 div3">
                <p style="margin-top: 5%; font-size: 15px;">If you're having trouble clicking the "Reset Password" button, </p>
                <p style="font-size: 15px">copy and paste the URL below into your </p>
                <p style="font-size: 15px">web browser: <a href="">/localhost:8080/update-password</a></p>
            </div>

        </div>

    </div>

</body>
</html>
