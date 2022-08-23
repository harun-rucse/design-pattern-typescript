import { ShapeFactory } from './ShapeFactory';

export class Main {
	public static main(): void {
		const shapeFactory = new ShapeFactory();

		// get Circle instance
		const circle = shapeFactory.getShape('CIRCLE');
		circle?.draw();

		// get Rectangle instance
		const rectangle = shapeFactory.getShape('RECTANGLE');
		rectangle?.draw();

		// get Square instance
		const square = shapeFactory.getShape('SQUARE');
		square?.draw();

		return;
	}
}
