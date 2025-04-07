<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::all();
        return view('properties.index', compact('properties'));
    }

    public function create()
    {
        return view('properties.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'photo' => 'nullable|image'
        ]);

        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('photos', 'public');
        }

        Property::create($data);
        return redirect()->route('properties.index');
    }

    public function show(Property $property)
    {
        return view('properties.show', compact('property'));
    }

    public function edit(Property $property)
    {
        return view('properties.edit', compact('property'));
    }

    public function update(Request $request, Property $property)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'photo' => 'nullable|image'
        ]);

        if ($request->hasFile('photo')) {
            if ($property->photo) {
                Storage::disk('public')->delete($property->photo);
            }
            $data['photo'] = $request->file('photo')->store('photos', 'public');
        }

        $property->update($data);
        return redirect()->route('properties.index');
    }

    public function destroy(Property $property)
    {
        if ($property->photo) {
            Storage::disk('public')->delete($property->photo);
        }
        $property->delete();
        return redirect()->route('properties.index');
    }
}

