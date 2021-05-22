import {CurryChain} from "./curryChain";

/**
 * Quick and dirty function to test the type
 */
export function curry<Function extends (...args: any) => any>(fn: Function, counter: number = fn.length): CurryChain<Function> {
	return  !counter ? fn() : ((head: any) => curry((...args: any) => fn(head, ...args), --counter))
}