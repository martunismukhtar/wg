<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Keramaian;
use Validator;

class KeramaianController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    
    public function index() {

        $ttk = \DB::select( \DB::raw("select bb.*,
        sum (user_per_brand) OVER 
        (PARTITION BY  longitude, latitude) as total_user 
        from (
        select 
                longitude,
                latitude,
                brand,
                (select string_agg(time::text, ' to ') from (
                    select distinct  tk.latitude, tk.longitude, time 
                    from titik_keramaian tk where  
                    latitude = k.latitude  and longitude =k.longitude) ss group by longitude, latitude) as range,
                    sum (user_count) as user_per_brand
            FROM
                titik_keramaian k
            where time::time>='07:00:00' and time::time<='08:00:00'
            group by 1,2,3
            order by longitude,latitude, brand) bb") );
        return response()->json([
            'status'=>'success', 
            'data'=>$ttk
        ]);
    }


}
