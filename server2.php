<?php
    

    $name = $_POST ['user-name'];
    $phone = $_POST ['phone'];
    $street = $_POST ['street'];
    $house = $_POST ['house'];
    $building = $_POST ['building'];
    $flat = $_POST ['flat'];
    $floor = $_POST ['floor'];
    $comment = $_POST ['comment'];
    $payOption = $_POST ['pay-option'];
    $dontDisturb = $_POST ['dont-disturb'];
    $dontDisturb = isset($dontDisturb) ? 'Нет' : 'Да';

    $mail_message = '
        <html>
        <head>
            <title>Заказ на бургеры</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя:' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Улица:' . $street . '</li>
                <li>Дом: ' . $house . '</li>
                <li>Корпус:' . $building . '</li>
                <li>Квартира: ' . $flat . '</li>
                <li>Этаж:' . $floor . '</li>
                <li>Комментарий: ' . $comment . '</li>
                <li>Способ оплаты: ' . $payOption . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $dontDisturb . '</li>
            </ul>
        </body>
        </html>';

    $headers = "From: Администратор сайта <burgers@yandex.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";


    echo 'pan-ta@yandex.ru', 'Заказ', $mail_message, $headers;
    


    $mail = mail('pan-ta@yandex.ru', 'Заказ', $mail_message);

    
    // $data = [];

    // if ($mail) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }

    
    // echo json_encode($data);

?>