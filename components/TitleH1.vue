<template>
    <h1 class="title-h1">
        <span v-for="(letter, i) in title" :key="i">{{ letter | jump }}</span>
    </h1>
</template>

<script>
  export default {
    props: ['title'],
    name: 'TitleH1',
    filters: {
      jump: (value) => (value === ',')?`${value}\n`:`${value}`
    }
  }
</script>

<style scoped>
.title-h1 {
    white-space:pre;
}
</style>