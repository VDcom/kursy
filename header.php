<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1">
        <title>Курсы по созданию сайтов и продвижению в топ|VDcom</title>
        <meta name="description" content="Курсы web программирования по созданию сайтов. Курсы SEO-специалиста. Получите практические знания и навыки! Диплом в конце курса · Полный конспект лекций/">
        <meta name="keywords" content="курсы web программирования в Черкассах, курсы SEO SEO-специалиста, курсы front-end, курсы создание сайтов цена" />
        <meta property="og:image" content="images/elements/logo-white.png" />
        <link rel="stylesheet" type="text/css" href="js/fancybox/jquery.fancybox.css">
        <link rel="stylesheet" href="fonts/font-awesome-4.3.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="fonts/style.css"/>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
        <link rel="stylesheet" type="text/css" href="css/ayoshare.css"/>
        <link rel="stylesheet" type="text/css" href="css/jquery.scrollbar.css"/>
        <link rel="stylesheet" type="text/css" href="css/slick.css"/>
        <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic&subset=latin,cyrillic-ext,cyrillic,latin-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link href="images/elements/logo-white.png" rel="shortcut icon">
        

        <script type="text/javascript" src="js/jquery-2.2.0.js"></script>
        <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/fancybox/jquery.fancybox.pack.js"></script>
        <script type="text/javascript" src="js/jquery.scrollbar.js"></script>
        <script type="text/javascript" src="js/jquery.bxslider.js"></script>
        <script type="text/javascript" src="js/slick.min.js"></script>
        <script type="text/javascript" src="js/ayoshare.js"></script>
        <script type="text/javascript" src="js/jquery.mobile.custom.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        
    </head>
    <body>

<?php
if(isset($_POST['name']))
{
    if($_POST['name'])
    { 
        $data .= "<br><b>Имя:</b> ".$_POST['name'] .". ";
    }
    if($_POST['phone'])
    { 
        $data .= "<br><b>Телефон:</b> ".$_POST['phone'] .". ";
    }
    if($_POST['from'])
    {
        $data .= "<br><b>Форма:</b> ".$_POST['from'];
    }
    if($_POST['comment'])
    { 
        $data .= "<br><b>Cообщение:</b> ".$_POST['comment'];
    }

    $data .= "<br><b>IP пользователя:</b> ".$_SERVER[REMOTE_ADDR];

    if(mail(

    'paoletta0011@gmail.com, dyachyk15@gmail.com',
        "Заявка на ",
        "С сайта VDcom Курсы была получена анкета с даными.$data",
        "Content-type: text/html; charset=utf-8\r\n"
    )):
    ?>

        <style>
            .modal-screen {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 99999999;
            }
            .modal-screen .ms-layer {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
                background-size: cover;
                z-index: 1;
            }
            .modal-screen .msl-content {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                max-width: 450px;
                min-width: 300px;
                height: 160px;
                background: #ffffff;
                z-index: 2;
                border-radius: 4px;
            }
                        
                        
            .modal-screen .msl-content h1 {
                color: #000;
                margin: 0;
                padding-top: 25px;
                text-transform: uppercase;
                font-size: 25px;
                text-align: center;
            }
            .modal-screen .msl-content p {
                padding: 0px 15px;
                margin: auto;
                font-size: 15px;
                color: #000;
                font-weight: 700;
                text-align: center;
            }
            .modal-screen .msl-content a {
                display: block;
                margin: 17px auto 0;
                padding: 0.2em 0;
                color: #fff;
                width: 6vw;
                text-align: center;
                background: #003f7f;
                font-size: 1.3em;
                border-radius: 5px;
                text-transform: uppercase;
            }
        </style>
        </div>

    <?php endif;
}
?>
<!-- End SiteHeart code -->

    <!-- Fixed menu -->

                        <div class="row m0 menu-fix">
                        <div class="container">
                            <div class="menu-wrap">
                                <ul class="menu scrollbar-dynamic">
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".why">Преимущества</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".results">Обучение</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".cost1">Цены</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".cost">Наши курсы</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".shedule">Наборы</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".contacts-top">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" target="_blank" class="logo pull-left">
                                <img src="/images/elements/logo-white.png">
                            </a>
                            <div class="mobile-nav">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                            <div class="header-contacts pull-right">
                                <div class="header-phone">
                                    <a href="tel:+380964004010">(096) <span>400-40-10</span></a>
                                </div>
                                <div class="works-time">
                                    Пн-Пт: 10:00-19:00, Сб-Вс: 12:00-19:00
                                </div>
                                <div class="header-actions-wrap">
                                    <a href="#"
                                       data-from="Заказ бесплатного звонка. Курсы Java. Шапка сайта."
                                       data-title="Закажите<br>бесплатный<br>звонок"
                                       data-btn="Перезвоните"
                                       class="modal-open order-link btn-link call-back-btn">Перезвонить Вам?</a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <!-- Fixed Menu -->
        <div class="hidden-forms">
            <div class="liqpay-form">
                <form method="POST" accept-charset="utf-8" action="https://www.liqpay.com/api/pay">
                    <input type="hidden" name="public_key" value="i1121467236">
                    <input type="hidden" name="amount" value="1479">
                    <input type="hidden" name="currency" value="UAH">
                    <input type="hidden" name="description" value="Front-End Start (2% комисcия сервиса)">
                    <input type="hidden" name="type" value="buy">
                    <input type="hidden" name="language" value="ru">
                    <input type="submit" class="pay" src="https://static.liqpay.com/buttons/p5ru.png" value="Оплатить" name="btn_text">
                </form>
            </div>
        </div>
        <div class="modals">
            <a href="#thanks-modal" class="thanks-link modal-open"></a>
            <div id="thanks-modal">
                <a href="javascript:void(0)" class="close-modal"></a>
                <div class="thanks-header">
                    Спасибо!
                </div>
                <div class="thanks-text">
                    Ваша заявка принята
                </div>
            </div>
            <div id="order-modal" class="custom-modal">
                <a href="javascript:void(0)" class="close-modal"></a>
                <div class="main-form">
                    <div class="main-form-title">
                        Закажите курс<br>
                        прямо<br>
                        сейчас!
                    </div>
                    <form method="post" action="" autocomplete="off">
                        <div class="form-field">
                            <input type="text" name="name" placeholder="Имя" autocomplete="off" min="2" maxlength="25" required title="Пожалуйста введите ваше имя.">
                            <div class="name-icon"></div>
                            <div class="ok-icon"></div>
                        </div>
                        <div class="form-field">
                            <input type="tel" type="number" name="phone" placeholder="Телефон" autocomplete="off" required  maxlength="13" title="Пожалуйста введите ваш телефон.">
                            <div class="phone-icon"></div>
                            <div class="ok-icon"></div>
                        </div>
                        <div class="form-field textarea-field">
                            <textarea name="comment" placeholder="Комментарии" maxlength="60"></textarea>
                            <div class="comment-icon"></div>
                        </div>
                        <a href="javascript:void(0)" class="send custom-btn">Записаться</a>
                        <input type="hidden" name="from" value="Заказать курс">
                    </form>
                </div>

            </div>
        </div>
        <div class="wrapper fe-group">
            <div class="main section">
                <div class="video-wrap active">
                <video id="homescreen_video" preload="auto" muted="true" loop="" autoplay="autoplay" poster="/images/bg/poster.jpg"><source src="/video/bg_2.mp4" type="video/mp4"></video>
                    <div class="shadow"></div>
                </div>
                <div class="detail-menu">
                    <ul class="detail-menu-content">
                         
                                                
                    </ul>
                </div>
                <div class="header">
                    <div class="container">
                        <div class="row m0">
                            <div class="menu-wrap">
                                <ul class="menu scrollbar-dynamic">
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".why">Преимущества</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".results">Обучение</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".cost1">Цены</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".cost">Наши курсы</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".shedule">Наборы</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" class="scroll" data-scroll=".contacts-top">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" target="_blank" class="logo pull-left">
                                <img src="images/elements/logo-white.png">
                            </a>
                            <div class="mobile-nav">
                                <div class="bar"></div>
                                <div class="bar"></div>
                                <div class="bar"></div>
                            </div>
                            <div class="header-contacts pull-right">
                                <div class="header-phone">
                                    <a href="tel:+380964004010">(096) <span>400-40-10</span></a>
                                </div>
                                <div class="works-time">
                                    Пн-Пт: 10:00-19:00, Сб-Вс: 12:00-19:00
                                </div>
                                <div class="header-actions-wrap">
                                    <a href="#order-modal"
                                       data-from="Заказ бесплатного звонка. Курсы Front-end. Шапка сайта."
                                       data-title="Закажите<br>бесплатный<br>звонок"
                                       data-btn="Перезвоните"
                                       class="modal-open order-link btn-link call-back-btn">Перезвонить Вам?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--header-the-and-->
                