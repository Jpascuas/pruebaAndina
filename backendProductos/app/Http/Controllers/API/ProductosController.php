<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Productos;
use Log;

class ProductosController extends Controller
{
    public function getAll(){
        $data = Productos::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['nombre'] = $request['nombre'];
        $data['precio'] = $request['precio'];
        $data['cantidad'] = $request['cantidad'];
        $data['imagen'] = $request['imagen'];
        $data['observaciones'] = $request['observaciones'];
        $data['ciudades'] = $request['ciudades'];
        Productos::create($data);
        return response()->json([
            'message' => 'Producto creado',
            'success' => true
        ], 200);

    }

    public function delete($id){
        $res = Productos::find($id)->delete();
        return response()->json([
            'message' => 'Producto eliminado',
            'success' => true
        ], 200);
    }

    public function get($id){
        $data = Productos::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        $data['nombre'] = $request['nombre'];
        $data['precio'] = $request['precio'];
        $data['cantidad'] = $request['cantidad'];
        $data['imagen'] = $request['imagen'];
        $data['observaciones'] = $request['observaciones'];
        $data['ciudades'] = $request['ciudades'];
        Productos::find($id)->update($data);
        return response()->json([
            'message' => 'Producto actualizado',
            'success' => true
        ], 200);
    }
}
