<template>
  <div class="canvas_wrapper" ref="canvas_wrapper">
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="info">
      <h1>hello</h1>
      <p>this is my somehitng of somehting and something
        of somehting and something
        of somehting and something
        of somehting and something </p>
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
  position: absolute;
  top: 128px;
  left: 150px;
  width: 300px;
  font-family: Arial;
}
</style>