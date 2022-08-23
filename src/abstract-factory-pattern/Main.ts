import { FactoryProducer } from './FactoryProducer';

export class Main {
	public static main(): void {
		// get rounded shape factory
		const shapeFactory = FactoryProducer.getFactory(true);

		//get an object of Shape Rounded Rectangle
		const shape1 = shapeFactory?.getShape('RECTANGLE');
		shape1?.draw();

		//get an object of Shape Rounded Square
		const shape2 = shapeFactory?.getShape('SQUARE');
		shape2?.draw();

		// get normal shape factory
		const shapeFactory2 = FactoryProducer.getFactory(false);

		//get an object of Shape normal Rectangle
		const shape3 = shapeFactory2?.getShape('RECTANGLE');
		shape3?.draw();

		//get an object of Shape normal Square
		const shape4 = shapeFactory2?.getShape('SQUARE');
		shape4?.draw();
	}
}
