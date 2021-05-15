/**
 * Found online, very nifty trick to transform A | B | C into A & B & C
 * https://fettblog.eu/typescript-union-to-intersection/
 * tldr
 * T = A | B | C
 * T extends any -> A | B | C
 *  (x: T) => any  -> (x: A & B & C) ||| any (remember, functions arguments are contra-variant)
 *  extends (x: infer R) -> any ? R : never  =>  A & B & C
 */
export type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never

