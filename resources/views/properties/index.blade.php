<h1>All Properties</h1>
<a href="{{ route('properties.create') }}">Create Property</a>
<ul>
@foreach($properties as $property)
    <li>
        <a href="{{ route('properties.show', $property) }}">{{ $property->name }}</a>
        <a href="{{ route('properties.edit', $property) }}">Edit</a>
        <form action="{{ route('properties.destroy', $property) }}" method="POST" style="display:inline">
            @csrf
            @method('DELETE')
            <button>Delete</button>
        </form>
    </li>
@endforeach
</ul>
