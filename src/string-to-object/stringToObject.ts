type Token<K extends string> = `${any}:${K}/${any}`

/**
 * Transforms strings into an object, using Token<K> as the the token being used. In this example, the token starts (exclusive) with : and ends with (exclusive) /
 * StringToObject<"this/may/:or/may/:not/be/:useful/"> = {or: string, not: string, string: useful}
 */
export type StringToObject<K extends string, L extends string = '', All = {}> = K extends `${L}${Token<infer I>}` ? StringToObject<K, `${any}${L}:${any}`, All & {[key in I]: string} > : All
