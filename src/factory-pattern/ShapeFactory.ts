import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Square } from './Square';

export class ShapeFactory {
	public getShape(shapeType: string): Shape | null {
		if (shapeType === 'CIRCLE') {
			return new Circle();
		} else if (shapeType === 'SQUARE') {
			return new Square();
		} else if (shapeType === 'RECTANGLE') {
			return new Rectangle();
		}

		return null;
	}
}
