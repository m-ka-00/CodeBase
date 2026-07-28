import { randomInt } from 'mathjs';

export class Color {
	constructor(red=0, green=0, blue=0, alpha=1) { this.r=red; this.g=green; this.b=blue; this.a=alpha; }
	static random(a = 0.5) {
		const r = randomInt(0, 255); const g = randomInt(0, 255); const b = randomInt(0, 255);
		return new Color(r, g, b, a);
	}
	toString() { return `rgba(${this.r},${this.g},${this.b},${this.a})`; }
}