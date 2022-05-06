<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductosController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('productos')->group(function () {
    Route::get('/', [ ProductosController::class, 'getAll' ]);
    Route::post('/', [ ProductosController::class, 'create' ]);
    Route::get('/{id}', [ ProductosController::class, 'delete' ]);
    Route::get('/{id}', [ ProductosController::class, 'get' ]);
    Route::put('/{id}', [ ProductosController::class, 'update' ]);
});


