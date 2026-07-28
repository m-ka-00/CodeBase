import { Arithmetic } from './arithmetic.js';

export class Rectangle extends Arithmetic {
	constructor(position, dimensions) {
		super();
		this.position = position;
		this.dimensions = dimensions;
	}

	add(rectangle) { return new Rectangle(this.position.add(rectangle.position), this.dimensions.add(rectangle.dimensions)); }
	sub(rectangle) { return new Rectangle(this.position.subtract(rectangle.position), this.dimensions.subtract(rectangle.dimensions)); }
	scale(s) { return new Rectangle(this.position.scale(rectangle.position), this.dimensions.scale(rectangle.dimensions)); }
	clone() { return new Rectangle(this.position, this.dimensions); }
	toString() { return `Rectangle(${this.position}, ${this.dimensions})`; }
}