export const StartExclusive = ":"
export const EndExclusive = "/"

type Token<K extends string> = `${any}${typeof StartExclusive}${K}${typeof EndExclusive}${any}`

/**
 * Transforms strings into an object, using Token<K> as the the token being used. In this example, the token starts (exclusive) with : and ends with (exclusive) /
 * StringToObject<"this/may/:or/may/:not/be/:useful/"> = {or: string, not: string, useful: string}
 */
export type StringToObject<K, L extends string = '', All = {}> = K extends `${L}${Token<infer I>}` ? StringToObject<K, `${any}${L}:${any}`, All & { [key in I]: string }> : All


