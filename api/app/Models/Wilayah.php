<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wilayah extends Model
{
    protected $table = 'titik_wilayah';
    
    protected $fillable = [
        'name',
        'latitude',
        'longitude'
    ];
}
