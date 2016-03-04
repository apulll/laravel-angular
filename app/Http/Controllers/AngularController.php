<?php

namespace App\Http\Controllers;

class AngularController extends Controller
{
    public function serveApp()
    {
        return view('index');
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }

    public function welcome()
    {
        return view('welcome');
    }

    public function app()
    {
        return view('app');
    }
}
