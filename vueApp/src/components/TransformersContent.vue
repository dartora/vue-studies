<template>
  <div>
    <h4>Transformers Content</h4>
    {{ $route.params.name }}
  </div>
</template>

<script>
export default {
  name: "TransformersContent",
  data() {
    return {
      transformersContent: [{ name: "" }, { name: "" }, { name: "" }]
    };
  }
};
</script>
