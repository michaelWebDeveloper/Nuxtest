<template>
  <div class="container">
    <div class="greetings">
      <div class="greetings_content">
        <p class="greetings_pre">Frontend в беде, но есть человек который сможет его спасти...</p>
        <h1 class="greetings_headline">
          Михаил, защитник <span class="headline--accent">frontend</span> разработки
        </h1>
        <p class="greetings_paragraph">
          Компетентный специалист, сохраняющий огонь в глазах на протяжении 10 лет. За это время я
          выполнил более 1000 задач по разработке пользовательских интерфейсов, исправлению ошибок,
          вёрстке, тестированию, оптимизации, адаптации и программированию реактивных SPA
        </p>

        <div class="greetings_contacts">
          telegram:
          <a href="https://t.me/mikleWebDeveloper" class="greetings_contact">@mikleWebDeveloper</a>
        </div>
      </div>
      <img src="~/assets/badass-picaai.png" alt="" />
    </div>
  </div>

  <div class="technologies_wrapper">
    <div class="container">
      <h2 class="section_title">Предпочитаемые <span class="headline--accent">технологии</span></h2>
    </div>
    <div v-for="(logos, index) in logos_arrays" :key="index" class="technologies">
      <div v-for="logo in logos" :key="logo.class" class="technology_wrapper">
        <div class="technology" :class="playStuff || index > 0 ? logo.class : ''">
          <img :src="logo.src" alt="" />
        </div>

        <p class="technology_title">{{ logo.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import '~/assets/css/base.css'
import { onMounted, ref } from 'vue'

const playStuff = ref(true)
const logos_arrays = ref([
  [
    { class: 'vue', src: '/logos/vue.png', text: 'Vue.js' },
    { class: 'js', src: '/logos/js.svg', text: 'JavaScript' },
    { class: 'css', src: '/logos/css.svg', text: 'CSS3' },
    { class: 'html', src: '/logos/html.svg', text: 'HTML5' },
    { class: 'typescript', src: '/logos/typescript.png', text: 'Typescript' },
    { class: 'laravel', src: '/logos/laravel.svg', text: 'Laravel' },
    { class: 'node', src: '/logos/node.png', text: 'Node.js' },
    { class: 'postgres', src: '/logos/postgresql.png', text: 'Postgresql' },
  ],
  [
    { class: 'pinia', src: '/logos/pinia.svg', text: 'Pinia' },
    { class: 'vuetify', src: '/logos/vuetify.svg', text: 'Vuetify' },
    { class: 'bootstrap', src: '/logos/bootstrap.svg', text: 'Bootstrap' },
    { class: 'tailwind', src: '/logos/tailwind.svg', text: 'Tailwind' },

    { class: 'mongodb', src: '/logos/mongodb.svg', text: 'Mongodb' },
    { class: 'mysql', src: '/logos/mysql.svg', text: 'Mysql' },
    { class: 'socketio', src: '/logos/socket-io.svg', text: 'Socket.io' },
    { class: 'postman', src: '/logos/postman.svg', text: 'Postman' },
  ],
  [
    { class: 'php', src: '/logos/php.svg', text: 'PHP' },
    { class: 'nginx', src: '/logos/nginx.svg', text: 'Nginx' },
    { class: 'apache', src: '/logos/apache.svg', text: 'Apache2' },
    { class: 'ubuntu', src: '/logos/ubuntu.svg', text: 'Linux' },
    { class: 'redis', src: '/logos/redis.svg', text: 'Redis' },
    { class: 'docker', src: '/logos/docker.svg', text: 'Docker' },
    { class: 'git', src: '/logos/git.svg', text: 'Git' },

  ],
])

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (scrollY > 200 && playStuff.value) {
      playStuff.value = false
    }

    if (scrollY < 10 && !playStuff.value) {
      playStuff.value = true
    }
  })
})
</script>

<style scoped>
.container {
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
}
.section_title{
  font-family: RussoOne, serif;
  letter-spacing: 1px;
  padding-top: 30px;
  padding-bottom: 15px;
  text-align: center;
}
.greetings {
  display: flex;
}
.greetings_content {
  padding-top: 260px;
}
.greetings_pre {
  font-size: 11px;
}
.greetings_headline {
  font-family: RussoOne, serif;
  font-size: 42px;
  letter-spacing: 1px;
}
.headline--accent {
  color: #ff5300;
}
.greetings_contact {
  color: #2d79c7;
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
}
.greetings_contact:hover {
  color: #4291e1;
}
.greetings_paragraph {
  margin-top: 60px;
  font-size: 16px;
}
.greetings_contacts {
  margin-top: 100px;
  padding: 30px;
  border-radius: 20px;
  background: #232323;
  display: flex;
}
.technologies_wrapper {
  margin-top: 70px;
  background: #232323;
  padding: 30px 0;
}
.technologies {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.technology_wrapper {
  padding: 20px 0;
  margin: 0 5px;

  border-radius: 20px;
  background: #181818;
}
.technology_title {
  padding-top: 30px;
  text-align: center;
  font-size: 14px;
}
.technology {
  height: 50px;
  margin: 0 30px;
  transition: all 1.4s ease-out;
}
.technology img {
  width: 100%;
  height: 100%;
  transition: all 1.4s ease-out;
}

/* vue */
.technology.vue {
  transform: translate(580px, -855px);
}
.technology.vue img {
  transform: rotate(334deg) scale(3);
}

/* js */
.technology.js {
  transform: translate(641px, -959px);
}
.technology.js img {
  transform: rotate(22deg) scale(1.5);
}

/* css */
.technology.css {
  transform: translate(633px, -948px);
}
.technology.css img {
  transform: rotate(34deg) scale(1.4);
}

/* html */
.technology.html {
  transform: translate(462px, -865px);
}
.technology.html img {
  transform: rotate(6deg) scale(1.5);
}

/* typescript */
.technology.typescript {
  transform: translate(211px, -900px);
}
.technology.typescript img {
  transform: scale(1.1);
}

/* laravel */
.technology.laravel {
  transform: translate(-24px, -755px);
}
.technology.laravel img {
  transform: scale(1.17);
}

/* node */
.technology.node {
  transform: translate(-219px, -715px);
}
.technology.node img {
  transform: rotate(50deg) scale(1);
}

/* postgres */
.technology.postgres {
  transform: translate(-366px, -809px);
}
.technology.postgres img {
  transform: scale(1.5);
}
</style>
