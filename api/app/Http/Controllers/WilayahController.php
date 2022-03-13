<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wilayah;
use Validator;

class WilayahController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    
    public function index() {
        return response()->json([
            'status'=>'success', 
            'data'=>Wilayah::orderBy('id', 'DESC')->get()
        ]);
    }

    public function show($id) {
       
        return response()->json([
            'status'=>'success', 
            'data'=>Wilayah::findOrFail($id)
        ]);
    }

}
