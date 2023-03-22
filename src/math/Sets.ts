import {Between} from "./NumberManipulation";

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

const subset: SubSet<[1,2]> = [1,2,3,4]
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


export type Union<A extends [...any[]], B extends [...any[]]> = {[value: number]: [...A, ...B][number]}

type MustInclude<U extends [...any[]]> = {[value in keyof U as number]: U[value] } extends infer L ? L : never

const aa: MustInclude<[1,2,3]> = [ 3,2,3]



//
// type Unordered_2<A extends [any, any]> = A extends [infer X, infer Y] ? [X, Y] | [Y, X]:  never
//
// const unordered2 : Unordered_2<[1,2]> = [1,2]
// const unordered3 : Unordered_2<[1,2]> = [1,1]
// const unordered4 : Unordered_2<[1,2]> = [2,1]
//
//
// type Unordered_3<A extends [...any[]]> = {[index in keyof A]: A[{[index in keyof A]: index } & number ] }
//
// const unordered2b : Unordered_3<[1,2]> = [1,2]
// const unordered3b : Unordered_3<[1,2]> = [1,1]
// const unordered4b : Unordered_3<[1,2]> = [2,1]


export type Eq2<A extends [...any[]], B extends [...any[]]> = A extends SubSet<B> ? B extends SubSet<A> ? B : never : never

export type Eq3<A extends [...any[]]> = A extends Eq2<A, infer B> ? B : never

export type Unordered<A extends [...any[]]> = A extends [...infer Rest] ? Rest extends Eq2<Rest, infer B>  ? Eq2<B, Rest> : never : never


type ArrToUnion<Found extends [...any[]]> = Found["values"] extends () => IterableIterator<infer L> ? L : never

type UnionToArr<Arr> = Array<Arr>


type ArrToUnion3<A, Found extends [...any[]] = Found["values"] extends () => IterableIterator<A> ? Found : never : never : never>



export type test<T, Found extends [...any[]] = []> =  ArrToUnion<Found> extends T  ? "A" : "B"


const v: UnionToArr<1 | 2 | 3 > = [1,2,3]

export type UnionToArray<T, Found extends [...any[]] = []> =  ArrToUnion<Found> extends T  ? Found : UnionToArray<T, [T, ...Found]>


const unionTo: UnionToArray<1 | 2> =  [1,2]
export type AllElement<A extends [...any[]]> =   A["values"] extends () => Iterator<infer L> ? {[value in keyof A]:  L } : never


const all: AllElement<[2,3,4]> = [2,3,4]

export type UnOrd<A extends [...any[]], L extends keyof A = keyof A> = {[value in L]:  A[L] } & SubSet<A>


const unordered: UnOrd<[1,2,3]> = [1,2,3]
const unordered_2: UnOrd<[1,2,3]> = [2,3,1]
const unordered_3: UnOrd<[1,2,3]> = [2,1,1]

const unorderedb: UnOrd<[1,2,4]> = [1,2]
const unorderedb_2: UnOrd<[1,2,3]> = [1,2,1]
const unorderedb_3: UnOrd<[1,2,3]> = [1,2]



// export type Eq2<A extends [...any[]]> = A extends Eq<A, infer B> ? B extends Eq<A, B> ? B : B : never

//
// const isE2qtrue: Eq2<[2, 2, 1]> = [2,1,2]
// const isE2qfalse2: Eq2<[2, 2, 1]> = [2,1,2, 5]
//
// const isE2qfalse: Eq2<[2, 2, 1, 5]> = [2,1,2]

//TODO: not really a set
// var as: Distinct<[1,2,3,4, 4]> = [1,2,3,4, 4]
type Distinct <A extends [...any[]], C extends [...any[]] = []> = A extends [infer Head, ...infer Rest] ?
    Head extends Membership<Rest> ? Distinct<Rest, C> : Distinct<Rest, [...C, Head]> : C



export type Set<A extends [...any[]]> = {[Property in keyof A as number]: A[Property]}

const a: Set<[1,2,3]> = [2,1,3]
