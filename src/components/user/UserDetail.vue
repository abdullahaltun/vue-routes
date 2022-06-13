<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanıcının ID bilgisi : {{ $route.params.id }} </p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="{name : 'userEdit', params :{ id : $route.params.id}, query : {name: 'Abdullah', lastName : 'Altun'}}"
    > Kullanıcıyı Düzenle </router-link>
  </div>
</template>
<script>
  export default {}
</script>
