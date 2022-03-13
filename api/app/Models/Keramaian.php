<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keramaian extends Model
{
    protected $table = 'titik_keramaian';
    
    protected $fillable = [
        'brand',
        'latitude',
        'longitude',
        'user_count',
        'time'
    ];
}
