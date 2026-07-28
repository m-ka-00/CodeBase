import { Shape } from './shape.js';

export class Circle extends Shape {
	draw(context) {
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
		context.fillStyle = this.color;
		context.fill();
	}
}
