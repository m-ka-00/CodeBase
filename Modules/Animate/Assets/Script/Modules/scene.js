import { Circle } from './circle.js';

export class Scene {
	constructor(view, num = 50) {
		this.view = view;
		this.circles = Array.from({ length: num }, () => new Circle(view));
	}
	update() {  }
	draw(context) { this.circles.forEach(c => c.draw(context)); }
}
