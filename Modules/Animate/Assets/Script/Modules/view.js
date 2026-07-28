export class View {
	constructor(canvas, window) {
		this.canvas = canvas;
		this.window = window;
		this.context = canvas.getContext();
	}
	update(scene) { scene.update(); }
	draw() {
		this.context.clearRect(this.canvas.position, this.canvas.dimensions);
		this.scene.draw(this.context);
	}
	async animate() {
		const loop = () => { this.update(); this.draw(); requestAnimationFrame(loop); };
		loop();
	}
}
