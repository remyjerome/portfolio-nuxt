<template>
    <div class="text-zone">
        <h1 aria-label=" About me" class="blast-root">{{title}}</h1>
        <p v-for="(p,i) in text" :key="i" class="blast-root">{{p}}</p>
    </div>
</template>

<script>
  export default {
    name: 'TextZone',
    props: {
      title: {
        type: String,
        default:'Titre'
      },
      text: {
        type: Array,
        default: () => ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum est laborum nemo optio rem sunt. Ab at consequatur consequuntur debitis, est fuga laborum necessitatibus officia optio praesentium quasi sint.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum est laborum nemo optio rem sunt. Ab at consequatur consequuntur debitis, est fuga laborum necessitatibus officia optio praesentium quasi sint.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum est laborum nemo optio rem sunt. Ab at consequatur consequuntur debitis, est fuga laborum necessitatibus officia optio praesentium quasi sint.']
      }
    }
  }
</script>

<style scoped>

</style>