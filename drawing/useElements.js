import GraphicRect from "~/drawing/class/renderable/GraphicRect.js";
import Vector2 from "~/drawing/class/Vector2.js";
import { getRandomColor, getRandomInt } from "~/drawing/utils/random.js";

export default () => {
    const elements = [];

    const fillElements = () => {
        setInterval(() => {
            elements.push(
                new GraphicRect(
                    new Vector2(200, 200),
                    30,
                    30,
                    getRandomColor()
                )
            )
        }, 200)
    }

    const targetTest = () => {
        setInterval(() => {
            const rElement = getRandomInt(0, elements.length-1)
            const rTarget = getRandomInt(0, elements.length-1)

            if(rElement !== rTarget){
                const randomElement = elements[getRandomInt(0, rElement)];
                const randomTarget = elements[getRandomInt(0, rTarget)];

                randomElement.setBehaviour(2, randomTarget);

            }
        }, 100)
    }

    const checkElementVisable = (ctx, element) => {
        const canvas = ctx.canvas
        return !(
            element.position.x > canvas.width ||
            element.position.y > canvas.height ||
            element.position.x < -element.width ||
            element.position.y < -element.height
        )
    }

    /** Отрисовка отображаемых сущностей */
    const renderElements = (ctx) => {
        elements.forEach((element, index) => {
            if(!checkElementVisable(ctx, element)){
                elements.splice(index, 1);
                element.deleteRect()
            }
        })

        elements.forEach((element) => {
            element.render(ctx)
        })
    }

    return {
        elements,
        renderElements,
        fillElements,
        targetTest
    }
}