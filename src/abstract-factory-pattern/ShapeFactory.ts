import { Shape } from './Shape';
import { AbstractFactory } from './AbstractFactory';
import { Rectangle } from './Rectangle';
import { Square } from './Square';

export class ShapeFactory extends AbstractFactory {
	getShape(shapeType: string): Shape | null {
		if (shapeType === 'SQUARE') {
			return new Square();
		} else if (shapeType === 'RECTANGLE') {
			return new Rectangle();
		}
		return null;
	}
}
