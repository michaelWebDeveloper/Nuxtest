<template>
  <div class="canvas_wrapper" ref="canvas_wrapper">
    <canvas id="canvas" ref="canvas"></canvas>
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
</style>