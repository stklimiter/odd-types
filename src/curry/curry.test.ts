import {curry} from "./curry";

test('curry, no-argument function', () => {
    let result: number = curry(()=> 3)
    expect(result).toBe(3)
});

test('curry, one argument function', () => {
    let fn: (n: number) => number = curry((n: number) => n)
    let result = fn(4)
    expect(result).toBe(4)
});

test('curry, two argument function', () => {
    let fn: (n: number) => (s: string) => string = curry((n: number, s: string) => s+n)
    let result = fn(5)('test')
    expect(result).toBe('test5')
});

test('curry, four argument function', () => {
    let fn: (n: number) => (s: string)  => (b: boolean) => (o: {a: number}) => string = curry((n: number, s: string, b: boolean, o: {a: number}) => s+n+ (b ? 'yes' : 'no') + o.a)
    let result = fn(1)('aaa')(true)({a: 12})
    expect(result).toBe('aaa1yes12')
});
