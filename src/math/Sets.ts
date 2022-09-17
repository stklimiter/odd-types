
/**
 * Is a member of a set, ∈
 *  Example:
 *  Correct:
 *      const inSet: Membership<[1,2,3]> = 1
 *  Incorrect:
 *      const inSet: Membership<[1,2,3]> = 0
 *      Type '0' is not assignable to type '3 | 1 | 2'.
 */
export type Membership <A extends [...any[]]> =  A[number]

/**
 * Is a not member of a set, ∉
 *  Example:
 *  Correct:
 *      const inSet: NoMembership<[1,2,3]> = 0
 *  Incorrect:
 *      const inSet: NoMembership<[1,2,3]> = 1
 *      Type 'number' is not assignable to type 'never'.
 */
export type NoMembership <A extends [...any[]], M> = M extends Membership<A> ? never : M




/**
 * TODO: better name
 * Any subset of I
 * Example:
 * Correct:
 *      const sub : Subset<[[1,2,3], ['a']> = [1,2,3]
 * Incorrect
 *      const sub  : Subset<[[1,2,3], ['a']> = [1]
 *      Type '[1]' is not assignable to type '[1, 2, 3] | ["a"]'.
 */
export type SetMembership<I extends [...any[]]>  = {[Property in keyof I]: I[Property]}[number]

//TODO: not really a set
// var as: Distinct<[1,2,3,4, 4]> = [1,2,3,4, 4]
type Distinct <A extends [...any[]], C extends [...any[]] = []> = A extends [infer Head, ...infer Rest] ?
    Head extends Membership<Rest> ? Distinct<Rest, C> : Distinct<Rest, [...C, Head]> : C


