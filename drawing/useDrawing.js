import useElements from "~/drawing/useElements.js";
import config from "~/drawing/config.js";

export default function useDrawing(ctx, canvas) {

    const {fillElements, renderElements, targetTest} = useElements()
    fillElements()
    targetTest()

    /** Чистка канваса */
    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    /** Цикл отрисовки */
    const renderLoop = () => {
        clear()
        renderElements(ctx)
        requestAnimationFrame(renderLoop)
    }

    /** Инициализация цикла отрисовки */
    const initRenderLoop = () => {
        config.canvas_width = canvas.width
        config.canvas_height = canvas.height
        renderLoop()
    }

    return {
        initRenderLoop
    }
}