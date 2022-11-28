<template>
  <div class="container authorization mb-5 mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-white text-uppercase">Авторизация</h1>
      </div>


      <div class="col-4"></div>
      <div class="col-4">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="email-wrap">📧</span>
          <input type="text" class="form-control" placeholder="example@email.com" aria-label="example@email.com" aria-describedby="email-wrap">
        </div>
      </div>
      <div class="col-4"></div>

      <div class="col-4"></div>
      <div class="col-4">
        <div class="input-group flex-nowrap input-password">
          <span class="input-group-text" id="pass-wrap">🔑</span>
          <input type="text" class="form-control" placeholder="1234567" aria-label="1234567" aria-describedby="pass-wrap">
        </div>
      </div>
      <div class="col-4"></div>

      <div class="col-4"></div>
      <div class="col-4"><button class="btn btn-danger" type="submit">Войти</button></div>
      <div class="col-4"></div><div class="col-4"></div>
      <div class="col-6"><button class="btn btn btn-danger" type="submit">Забыл пароль</button></div>
      <div class="col-4"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
}
</script>

<style scoped>
</style>