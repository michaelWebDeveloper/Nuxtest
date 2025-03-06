import GetRenderableElements from "~/drawing/getRenderableElements.js";


export default function useDrawing(ctx, canvas) {

    /** Список отображаемых сущностей */
    const elements = GetRenderableElements()

    /** Чистка канваса */
    const clear = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    /** Отрисовка отображаемых сущностей */
    const renderElements = () => {
        elements.forEach(element => {
            element.render(ctx)
        })
    }

    /** Цикл отрисовки */
    const renderLoop = () => {
        clear()
        renderElements()
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