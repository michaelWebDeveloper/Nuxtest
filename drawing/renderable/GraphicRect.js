import { getRandomInt } from "~/drawing/utils/random.js";

export default class GraphicRect {

    ctx
    direction

    constructor(x, y, width, height, color) {
        this.x = 300;
        this.y = 300;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    update() {


        this.x+= this.direction.x
        this.y+= this.direction.y
    }

    render(ctx){
        if(!this.ctx) this.ctx = ctx
        if(!this.direction){
            const randomPoint = {x: getRandomInt(0, ctx.canvas.width), y: getRandomInt(0, ctx.canvas.height)};
            const delta = {x: -(this.x - randomPoint.x), y: -(this.y - randomPoint.y)}
            const deltaLength = Math.sqrt(Math.pow(delta.x, 2) + Math.pow(delta.y, 2));
            this.direction = {x: delta.x / deltaLength, y: delta.y / deltaLength};
        }

        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)

        this.update()
    }
}