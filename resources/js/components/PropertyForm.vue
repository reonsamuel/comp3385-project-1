<template>
  <form id="propertyForm" @submit.prevent="submitProperty">
    <label>Title</label>
    <input type="text" name="title" required />

    <label>Description</label>
    <textarea name="description" required></textarea>

    <label>Photo</label>
    <input type="file" name="photo" accept="image/*" required />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
function submitProperty() {
  const form = document.getElementById("propertyForm");
  const formData = new FormData(form);

  fetch("/api/v1/properties", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
</script>
