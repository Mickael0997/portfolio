<?php
session_start();

function secure_session_start() {
    $session_name = 'secure_session';
    $secure = true;
    $httponly = true;

    ini_set('session.use_only_cookies', 1);
    $cookieParams = session_get_cookie_params();
    session_set_cookie_params(
        $cookieParams["lifetime"],
        $cookieParams["path"],
        $cookieParams["domain"],
        $secure,
        $httponly
    );
    session_name($session_name);
    session_start();
    session_regenerate_id(true);
}

function is_logged_in() {
    return isset($_SESSION['user_id']);
}

function login($user_id) {
    $_SESSION['user_id'] = $user_id;
}

function logout() {
    $_SESSION = array();
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
    session_destroy();
}
?>