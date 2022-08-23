import { Shape } from './Shape';

export class RoundedSquare implements Shape {
	draw(): void {
		console.log('Inside RoundedSquare::draw() method.');
	}
}
