import { Shape } from './Shape';

export abstract class AbstractFactory {
	abstract getShape(shapeType: string): Shape | null;
}
