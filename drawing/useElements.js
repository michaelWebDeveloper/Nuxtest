import GraphicRect from "~/drawing/renderable/GraphicRect.js";
import { getRandomColor } from "~/drawing/utils/random.js";

export default () => {
    const elements = [];

    const fillElements = () => {
        elements.push(new GraphicRect(10, 10, 30, 30, getRandomColor()))

        setInterval(() => {
            elements.push(new GraphicRect(10, 10, 30, 30, getRandomColor()))
        }, 200)
    }

    const checkElementVisable = (ctx, element) => {
        const canvas = ctx.canvas
        return !(
            element.x > canvas.width ||
            element.y > canvas.height ||
            element.x < -element.width ||
            element.y < -element.height
        )
    }

    /** Отрисовка отображаемых сущностей */
    const renderElements = (ctx) => {
        elements.forEach((element, index) => {
            if(!checkElementVisable(ctx, element))
                elements.splice(index, 1);
        })


        elements.forEach((element) => {
            element.render(ctx)
        })

    }

    return {
        elements,
        renderElements,
        fillElements
    }
}