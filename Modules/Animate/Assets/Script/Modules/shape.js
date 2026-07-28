import { Color } from './color.js';

export class Shape extends Math {
	constructor(position, size, color) {
		super();
		this.position = position;	// Point
		this.size = size;			// Point
		this.color = color;			// Color
	}
}