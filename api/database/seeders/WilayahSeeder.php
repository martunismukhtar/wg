<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WilayahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('titik_wilayah')->insert([
            'name'=>'Jakarta, Indonesia',
            'latitude'=>-6.200000,
            'longitude'=> 106.816666,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Pamekasan, Pamekasan Regency, East Jawa, Indonesia',
            'latitude'=>-7.161367,
            'longitude'=> 113.482498,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Banda Aceh, Banda Aceh City, Aceh, Indonesia',
            'latitude'=>5.548290,
            'longitude'=> 95.323753,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Ambon, Ambon Island, Maluku, Indonesia',
            'latitude'=>-3.654703,
            'longitude'=> 128.190643,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Palopo, Wara, South Sulawesi, Indonesia',
            'latitude'=>-2.994494,
            'longitude'=> 120.195465,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Soreang, Bandung, West Java, Indonesia',
            'latitude'=>-7.025253,
            'longitude'=> 107.51976,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Dumai, Dumai Province, Riau, Indonesia',
            'latitude'=>1.694394,
            'longitude'=> 101.445007,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Pematang Siantar City, North Sumatra, Indonesia',
            'latitude'=>2.970042,
            'longitude'=> 99.068169,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Banjarsari, Surakarta City, Central Java, Indonesia',
            'latitude'=>-7.550676,
            'longitude'=> 110.828316,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('titik_wilayah')->insert([
            'name'=>'Lhoksukon, Aceh Utara, Aceh, Indonesia',
            'latitude'=>5.051701,
            'longitude'=> 97.318123,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
