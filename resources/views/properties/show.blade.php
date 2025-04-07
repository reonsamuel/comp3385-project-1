<h1>{{ $property->name }}</h1>
<p>{{ $property->description }}</p>
@if ($property->photo)
    <img src="{{ asset('storage/' . $property->photo) }}" width="300">
@endif
