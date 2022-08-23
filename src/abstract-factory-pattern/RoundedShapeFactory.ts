import { Shape } from './Shape';
import { AbstractFactory } from './AbstractFactory';
import { RoundedRectangle } from './RoundedRectangle';
import { RoundedSquare } from './RoundedSquare';

export class RoundedShapeFactory extends AbstractFactory {
	getShape(shapeType: string): Shape | null {
		if (shapeType === 'SQUARE') {
			return new RoundedSquare();
		} else if (shapeType === 'RECTANGLE') {
			return new RoundedRectangle();
		}
		return null;
	}
}
