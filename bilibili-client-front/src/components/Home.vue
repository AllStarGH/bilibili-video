<template>
  <div class="hello">
    <img src="./../assets/logo.png">
    <!--  -->
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <div>
          <a href="/Register">
            注册
          </a>
        </div>
      </li>
      <li>
        <a href="/Test">
          测试 - 1
        </a>
      </li>
      <li>
        <a href="/AccountList">
          查看全体会员列表
        </a>
      </li>
      <li>
        <a href="/bilibiliVideo/chooseFolder">
          选择blv缓存目录
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to 哔哩哔哩缓存处理 App'
    }
  },
  methods: {
    //..
  },
  mounted() {
    console.log(this);
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
