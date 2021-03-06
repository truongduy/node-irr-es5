import { RootFinderOptions, IRootFinder, Root } from '../definition';
import { Polynomial } from '../../polynomial';
export declare class NewtonRootFinder implements IRootFinder {
    protected readonly options: RootFinderOptions;
    constructor(options: RootFinderOptions);
    protected autoEstimate(polynomial: Polynomial): number;
    findRoot(polynomial: Polynomial): Root;
}
