<template>
    <div class="container about">
        <span class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <TextZone title="About Me"/>
        <span class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br> &lt;/html&gt; </span>
    </div>
</template>

<script>
  import TextZone from "../components/TextZone";
  export default {
    name: 'about',
    components: {
      TextZone
    }
  }
</script>

<style scoped>

</style>