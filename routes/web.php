<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});

Route::resource('properties', PropertyController::class);

Route::resource('properties', \App\Http\Controllers\PropertyController::class);

