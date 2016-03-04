<?php

Route::get('/', 'AngularController@serveApp');

Route::get('/unsupported-browser', 'AngularController@unsupported');

Route::get('/welcome','AngularController@welcome');

Route::get('/app','AngularController@app');

$api->group([], function ($api) {

    $api->post('users/login', 'LoginController@login');

});

//protected routes with JWT (must be logged in to access any of these routes)
$api->group(['middleware' => 'api.auth'], function ($api) {

    $api->get('sample/protected', 'LoginController@protectedData');

});

$api->group(['middleware' => 'api.auth'],function($api) {

	$api->post('posts','CreatePostController@create');

});
