<h1>Create Property</h1>
<form method="POST" action="{{ route('properties.store') }}" enctype="multipart/form-data">
    @csrf
    Name: <input type="text" name="name"><br>
    Description: <textarea name="description"></textarea><br>
    Photo: <input type="file" name="photo"><br>
    <button type="submit">Save</button>
</form>
