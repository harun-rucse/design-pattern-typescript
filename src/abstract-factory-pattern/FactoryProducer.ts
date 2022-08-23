import { AbstractFactory } from './AbstractFactory';
import { RoundedShapeFactory } from './RoundedShapeFactory';
import { ShapeFactory } from './ShapeFactory';

export class FactoryProducer {
	public static getFactory(rounded: boolean): AbstractFactory | null {
		if (rounded) return new RoundedShapeFactory();

		return new ShapeFactory();
	}
}
