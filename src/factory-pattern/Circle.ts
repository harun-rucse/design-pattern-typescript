import { Shape } from './Shape';

export class Circle implements Shape {
	public draw(): void {
		console.log('Circle is drawn');
	}
}
