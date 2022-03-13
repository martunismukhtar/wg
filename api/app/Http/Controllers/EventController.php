<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Validator;

class EventController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    /**
     * List event
     * @OA\Get (
     *     path="/api/event",
     *     tags={"Event"},
     *     security={ 
     *          {"bearerAuth": {} }
     *     },
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="name", type="string", example="name"),
     *              @OA\Property(property="date", type="string", example="2022-03-06"),
     *              @OA\Property(property="time", type="string", example="25:53"),
     *              @OA\Property(property="location", type="string", example="location"),
     *              @OA\Property(property="image", type="string", example="path")
     *         )
     *     )
     * )
     */
    public function index() {
        return response()->json([
            'status'=>'success', 
            'data'=>Event::paginate(10)
        ]);
    }

    /**
     * Get Detail Event
     * @OA\Get (
     *     path="/api/event/{id}",
     *     tags={"Event"},
     *      @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     security={ 
     *          {"bearerAuth": {} }
     *     },
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="name", type="string", example="name"),
     *              @OA\Property(property="date", type="string", example="2022-03-06"),
     *              @OA\Property(property="time", type="string", example="25:53"),
     *              @OA\Property(property="location", type="string", example="location"),
     *              @OA\Property(property="image", type="string", example="path")
     *         )
     *     )
     * )
     */
    public function show($id) {
       
        return response()->json([
            'status'=>'success', 
            'data'=>Event::findOrFail($id)
        ]);
    }

    /**
     * Post event
     * @OA\Post (
     *     path="/api/event",
     *     tags={"Event"},
     *     security={ 
     *          {"bearerAuth": {} }
     *     },
     *     @OA\RequestBody(
     *          required=true,
     *          description="Pass event",
     *          @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(property="name", type="string", example="name"),
     *                 @OA\Property(property="date", type="string", format="date", example="2022-03-06"),
     *                 @OA\Property(property="time", type="string", format="date", example="20:01"),
     *                 @OA\Property(property="location", type="string", example="lccation"),
     *                 @OA\Property(
     *                     description="file to upload",
     *                     property="image",
     *                     type="file",
     *                ),
     *                required={"image"}
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="name", type="string", example="name"),
     *              @OA\Property(property="date", type="string", example="2022-03-06"),
     *              @OA\Property(property="time", type="string", example="25:53"),
     *              @OA\Property(property="location", type="string", example="location"),
     *              @OA\Property(property="image", type="string", example="path")
     *         )
     *     )
     * )
     */
    public function create(Request $request){
        $validation = Validator::make($request->all(),[
            'name'=>'required|string',
            'date'=>'required|date',
            'time'=>'required|date_format:H:i',
            'location'=>'required|string',
            'image' => 'required|mimes:jpg,png,jpeg|max:2048',
        ]);
        if($validation->fails()) {
            return response()->json($validation->errors(), 422);
        }
        $file = $request->file('image');
        $path = $file->store('public/files');
        $record = Event::create([
            'name' => $request->get('name'),
            'date' => $request->get('date'),
            'time' => $request->get('time'),
            'location' => $request->get('location'),
            'image' => $path
        ]);

        return response()->json([
            'status'=>'success', 
            'data'=>$record
            ]
        );
    }

    /**
     * Update event
     * @OA\POST (
     *     path="/api/event/{id}",
     *     tags={"Event"},
     *     security={ 
     *          {"bearerAuth": {} }
     *     },
     *      @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *          required=true,
     *          description="Pass event",
     *          @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(property="name", type="string", example="name"),
     *                 @OA\Property(property="date", type="string", format="date", example="2022-03-06"),
     *                 @OA\Property(property="time", type="string", format="date", example="20:01"),
     *                 @OA\Property(property="location", type="string", example="location"),
     *                 @OA\Property(property="_method", type="string", example="PUT"),
     *                 @OA\Property(
     *                     description="file to upload",
     *                     property="image",
     *                     type="file",
     *                ),
     *                required={"image"}
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="name", type="string", example="name"),
     *              @OA\Property(property="date", type="string", example="2022-03-06"),
     *              @OA\Property(property="time", type="string", example="25:53"),
     *              @OA\Property(property="location", type="string", example="location"),
     *              @OA\Property(property="image", type="string", example="path")
     *         )
     *     )
     * )
     */
    public function update(Request $request, $id) {
       
        $validation = Validator::make($request->all(),[
            'name'=>'required|string',
            'date'=>'required|date',
            'time'=>'required|date_format:H:i',
            'location'=>'required|string',
            'image' => 'nullable|mimes:jpg,png,jpeg|max:2048',
        ]);
        if($validation->fails()) {
            return response()->json($validation->errors(), 422);
        }
       
        $record = Event::find($id);
        $record->name = $request->get('name');
        $record->date = $request->get('date');
        $record->time = $request->get('time');
        $record->location = $request->get('location');
        
        if($request->hasFile('image')) {
            \Storage::delete($record->image);
            $file = $request->file('image');
            $path = $file->store('public/files');
            $record->image = $path;
            
        }
        $record->save();

        return response()->json([
            'status'=>'success', 
            'data'=>$record]
        );
    }

    /**
     * Delete event
     * @OA\Delete (
     *     path="/api/event/{id}",
     *     tags={"Event"},
     *     security={ 
     *          {"bearerAuth": {} }
     *     },
     *     @OA\Parameter(
     *         in="path",
     *         name="id",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *             @OA\Property(property="msg", type="string", example="delete data success")
     *         )
     *     )
     * )
     */
    public function delete($id) {
        $record = Event::find($id);
        if(!empty($record)) {

            \Storage::delete($record->image);
            $record->delete();
            return response()->json([
                'status'=>'success', 
                'data'=>$record->image
                ]
            );
        } else {
            return response()->json([
                'status'=>'success', 
                'data'=>"Data tidak ditemukan"
                ]
            );
        }
        
        
    }
}
