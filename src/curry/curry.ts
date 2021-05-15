import {CurryChain} from "./curryChain";

export function curry<Function extends (...args: any) => any>(fn: Function): CurryChain<Function> {
	return curryRecursive(fn)
}

function curryRecursive<Function extends (...args: any) => any>(fn: Function, counter: number = fn.length): CurryChain<Function> {
	return 0 == counter
		? fn()
		: ((head: any) => curryRecursive((...args: any) => fn(head, ...args), --counter))
}
