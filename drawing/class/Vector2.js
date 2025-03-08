export default class Vector2{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getLength(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    getDelta(vector){
       return new Vector2(-(this.x - vector.x), -(this.y - vector.y))
    }

    getNormal() {
        if(this.x === 0 || this.x === -0 || this.y === 0 || this.y === -0) {
            return new Vector2(0, 0)
        }
        return new Vector2(this.x / this.getLength(), this.y / this.getLength())
    }

    getDistance(vector){
        return Math.sqrt(
            Math.pow(vector.y - this.y, 2) +
            Math.pow(vector.x - this.x, 2)
        )
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}