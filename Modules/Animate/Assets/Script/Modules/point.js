import { Math } from './math.js';
import { norm } from 'mathjs';

export class Point extends Math {
	constructor(x=0, y=0) { super(); this.x=x; this.y=y; }

	operate(operator, ...points) {
		const result = Math.operate(operator, this, ...points);
		return new Point(result);
	}

	add(	  ...points)	{ return this.operate('+', ...points); }
	subtract( ...points)	{ return this.operate('-', ...points); }
	scale(	  ...points)	{ return this.operate('*', ...points); }
	magnitude(...points)	{ return norm(		[this, ...points].flatMap(point => Object.values(point))); }

	clone() { return new Point( ...Object.values(this)); }
	toString() { return `Point(  ${Object.values(this).join(', ')})`; }
}
