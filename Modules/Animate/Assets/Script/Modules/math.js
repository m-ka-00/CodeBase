import { evaluate } from 'mathjs';

export class Math {
	static operation(operator, ...operands) {
		if (typeof operator === 'function')	{ return operands.reduce(operator);					}
		if (typeof operator === 'string')	{ return evaluate(operands.join(` ${operator} `));	}
		throw new Error('Unsupported operator: ' + operator);
	}
	
	static operate(operator, ...objects) {
		const result = {}; const keys = Object.keys(objects[0]);

		for (const key of keys) {
			const values	 = objects.map(object => object[key]);
			const allNumbers = values.every(value => typeof value === 'number');
			const allObjects = values.every(value => typeof value === 'object' && value !== null);

			switch (true) {
				case allNumbers: result[key] = Math.operation(operator, ...values); break;
				case allObjects: result[key] = Math.operate(  operator, ...values); break;
				default:		 result[key] = objects[0][key];
			}
		}
		
		return result;
	}
}