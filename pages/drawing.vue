<template>
  <div class="canvas_wrapper" ref="canvas_wrapper">
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="info">
      <h1 class="info_title">Hello</h1>
      <p class="info_message">
        I don't want everything on web to be trivial and boring,
        I take general interest in design and experiences that people have
        while browsing sites and applications
      </p>
    </div>
  </div>
</template>

<script setup>
  import {onMounted, useTemplateRef} from "vue";
  import useDrawing from "~/drawing/useDrawing.js";

  const canvasElement = useTemplateRef('canvas')
  const canvasWrapperElement = useTemplateRef('canvas_wrapper')

  onMounted(() => {
    canvasElement.value.width = canvasWrapperElement.value.clientWidth
    canvasElement.value.height = canvasWrapperElement.value.clientHeight

    const ctx = canvasElement.value.getContext('2d')
    const { initRenderLoop } = useDrawing(ctx, canvasElement.value)

    initRenderLoop()
  })
</script>

<style scoped>
.canvas_wrapper{
  width: 100%;
  height: 100%;
  background-color: #badcef;
}
.info{
  padding: 50px;
  background-color: #b28aff;
  color: #232323;
  position: absolute;
  top: 128px;
  left: 150px;
  width: 400px;
}
.info_title{
  padding-bottom: 20px;
}
</style>