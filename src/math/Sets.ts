
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
 * Any subset of I
 * Example:
 * Correct:
 *      const sub : Subset<[1,2,3]> = [1,3] | [1] | [2] | [1,1,1] etc
 * Incorrect
 *      const subset: SubSet<[1,2,3]> = [4]
 *      Type '4' is not assignable to type '3 | 1 | 2'.
 */
export type SubSet<Set extends [...any[]]> = {[value: number]: Set[number]}


/**
 * Eq two sets are equal, if all the types in set A, are also in set B
 * Example:
 * Correct:
 *      const isEq_1: Eq<[2, 2, 2, 1, 3], [3, 5,2,1]> = true
 *      const isEq_2: Eq<[2, 2, 5, 1], [2,2,1,2]> = true
 * Incorrect
 *      const isEq_1: Eq<[2, 2, 2, 1, 3], [3, 5,2,1]> = true
 *      const isEq_2: Eq<[2, 2, 5, 1], [2,2,1,2]> = true
 *      Type 'boolean' is not assignable to type 'never'.
 */
export type Eq<A extends [...any[]], B extends [...any[]]> = A extends SubSet<B> ? B extends SubSet<A> ? true : never : never

