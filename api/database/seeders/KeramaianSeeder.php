<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KeramaianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('titik_keramaian')->insert([
            'brand'=>'Infinix',
            'longitude'=>'106.77709118108051',
            'latitude'=> '-6.142837378870265',
            'time'=> '2021-10-20 08:00:00',
            'user_count'=>1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Samsung',
            'longitude'=>'106.77709118108051',
            'latitude'=> '-6.142837378870265',
            'time'=> '2021-10-20 07:00:00',
            'user_count'=>1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Xiaomi',
            'longitude'=>'106.77809118108054',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 09:00:00',
            'user_count'=>1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Xiaomi',
            'longitude'=>'106.7790911810806',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 07:00:00',
            'user_count'=>1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Oppo',
            'longitude'=>'106.7790911810806',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 07:00:00            ',
            'user_count'=>5,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Xiaomi',
            'longitude'=>'106.7790911810806',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 08:00:00',
            'user_count'=>2,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Itel',
            'longitude'=>'106.78109118108071',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 08:00:00',
            'user_count'=>8,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Huawei',
            'longitude'=>'106.78209118108074',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 08:00:00',
            'user_count'=>6,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Samsung',
            'longitude'=>'106.78209118108074',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 08:00:00',
            'user_count'=>1,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_keramaian')->insert([
            'brand'=>'Samsung',
            'longitude'=>'106.78209118108074',
            'latitude'=> '-6.142837378870266',
            'time'=> '2021-10-20 07:00:00',
            'user_count'=>2,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
