import useElements from "~/drawing/useElements.js";

export default function useDrawing(ctx, canvas) {

    const {fillElements, renderElements} = useElements()
    fillElements()

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
        renderLoop()
    }

    return {
        initRenderLoop
    }
}