import GraphicRect from "~/drawing/renderable/GraphicRect.js";
import { getRandomColor } from "~/drawing/utils/random.js";

export default () => {
    const elements = [];

    elements.push(new GraphicRect(10, 10, 30, 30, getRandomColor()))

    return elements
}