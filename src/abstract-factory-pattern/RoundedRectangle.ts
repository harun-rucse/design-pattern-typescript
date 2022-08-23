import { Shape } from './Shape';

export class RoundedRectangle implements Shape {
	draw(): void {
		console.log('Inside RoundedRectangle::draw() method.');
	}
}
