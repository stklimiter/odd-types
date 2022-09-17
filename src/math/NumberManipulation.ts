
/**
 * Create a typed list of length N, of Type T.
 *  Example:
 *  Correct:
 *      const length3: ListOfLength<3, number> = [1,2,3]
 *  Incorrect:
 *      const length3: ListOfLength<3, number> = [1,2,3,6]
 *      Type '[number, number, number, number]' is not assignable to type '[number, number, number]'. Source has 4 element(s) but target allows only 3.
 */
export type ListOfLength<N extends number, T = unknown, L extends [...T[]] = []> = L['length'] extends N ? L : ListOfLength<N, T, [T, ...L]>

/**
 * Create number type, that is the sum of number A and B
 *  Example:
 *  Correct:
 *      const nineteen: Addition<9, 10> = 19
 *  Incorrect:
 *      const twenty: Addition<9, 10> = 20
 *      Type '20' is not assignable to type '19'.
 */
export type Addition<A extends number, B extends number> = [...ListOfLength<A>, ...ListOfLength<B>]['length']

/**
 * Flatten an Array
 *  Example:
 *  Correct:
 *      const flat: Flatten<[[1, 2, 3], [12, 1]]> = [1, 2, 3, 12, 1]
 *  Incorrect:
 *      const flat: Flatten<[[1, 2, 3], [12, 1]]> = [1, 2, 3, 12, 1, 3]
 *      Type '[1, 2, 3, 12, 1, 3]' is not assignable to type '[1, 2, 3, 12, 1]'. Source has 6 element(s) but target allows only 5.
 */
export type Flatten<A extends [...any[]]> = A extends [infer A_, ...infer Rest] ?
    A_ extends any[] ? [...A_, ...Flatten<Rest>] : [] : []

/**
 * CrossProduct of two numbers
 *  Example:
 *  Correct:
 *      const cross : CrossProduct<3, 7> = 21
 *  Incorrect:
 *      const cross : CrossProduct<11, 7> = 21
 *      Type '21' is not assignable to type '77'.
 */
export type CrossProduct<A extends number, B extends number> = [...Flatten<ListOfLength<A, ListOfLength<B>>>]['length']


export type AddOne<K extends number> = [unknown, ...ListOfLength<K>]['length']






