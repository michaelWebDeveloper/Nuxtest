import { getRandomInt } from "~/drawing/utils/random.js";
import config from "~/drawing/config.js";
import Vector2 from "~/drawing/class/Vector2.js";

export default class GraphicRect {


    constructor(position, width, height, color) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.target = null
        this.deleted = false

        const randomWidth = getRandomInt(0, config.canvas_width)
        const randomHeight = getRandomInt(0, config.canvas_height)
        const randomPoint = new Vector2(randomWidth, randomHeight)

        this.randomDirection = position.getDelta(randomPoint).getNormal()
        this.behaviour = 1
    }

    /** ПОВЕДЕНИЕ */

    setBehaviour(mode, payload) {
        this.behaviour = mode;

        if(mode === 2) {
            this.target = payload
        }
    }

    behaviourRandomDirection() {
        this.position.add(this.randomDirection)
    }

    behaviourFollowTarget() {
        if(this.target.deleted) {
            this.target = null
            this.setBehaviour(1)
            return
        }

        if(this.position.getDistance(this.target.position) < 10){
            this.target = null
            this.setBehaviour(1)
            return
        }

        const targetDirection = this.position.getDelta(this.target.position).getNormal()
        this.position.add(targetDirection)
    }

    /** Жизненный цикл */

    deleteRect(){
        this.deleted = true
    }

    update() {
        switch (this.behaviour){
            case 1: this.behaviourRandomDirection(); break;
            case 2: this.behaviourFollowTarget(); break;
        }
    }

    render(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        this.update()
    }
}