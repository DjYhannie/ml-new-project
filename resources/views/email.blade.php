<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>email</title>
</head>
<style>
    /* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

body{
    background-color: rgb(209, 235, 243);
    text-align: center;
}

.container{
    box-sizing: border-box;
    border-radius: 5px;
    background-color: rgb(39, 36, 36);
    margin: auto;
    margin-top: 5%;
}
.imgs{
    background-image: url("http://sapropertyinsider.co.za/wp-content/uploads/2017/06/Commercial-prop-risk.png");
    /* background-color: rgb(230, 202, 202); */
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
}
#headertext{
    padding: 12%;
    text-align: center;
    vertical-align: center;
}
#h1text{
    padding-top: 12%;
    color: rgb(5, 42, 77);
}

h2{
    padding-top: 11%;
    text-align: center;
    color: white;
}
hr{
   border: 1px solid red;
}

button{
    background-color: rgb(5, 42, 77);
    color: white;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    padding: 16px 32px;
    cursor: pointer;
    transition-duration: 0.4s;
    border-radius: 2px;
    margin: 4px 2px;
    border: none;
    font-size: 18px
}
button:hover{
    background-color: rgb(31, 133, 211);
}

.div2{
    background-color: pink;
    margin-top: -10%;
}
.logo{
    box-sizing: border-box;
    border-radius: 50%
    vertical-align: middle;
    width: 20%;
    height: 50%;
    border-radius: 50%;
    margin-top: -11%;
    display: flex;
    justify-content: center;
    margin-left: 39%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

</style>
<body>
    <div class="col-5 col-s-5 container">
        <div class="row">
            <div class="col-12 col-s-12 imgs">
                    <h1 id="headertext">MLhuillier EOX Site Notification</h1>
            </div>
            <hr>
            <img class="logo" src="https://play-lh.googleusercontent.com/OcV8yyAyw8x91UxgBDpYE5A-awtgaXTYOVoJUN8QQp2dtRS25xdcYwWFtYmI0LiZhSk" alt="">
            <div class="col-12 col-s-12 div2">
                <h1 id="h1text">Password Reset</h1>
                <p>Note: Please click the button below to reset your password.</p>
                <button>Resset Password</button>
            </div>

        </div>

    </div>

</body>
</html>
