<h1>Edit Property</h1>
<form method="POST" action="{{ route('properties.update', $property) }}" enctype="multipart/form-data">
    @csrf
    @method('PUT')
    Name: <input type="text" name="name" value="{{ $property->name }}"><br>
    Description: <textarea name="description">{{ $property->description }}</textarea><br>
    Photo: <input type="file" name="photo"><br>
    <button type="submit">Update</button>
</form>
