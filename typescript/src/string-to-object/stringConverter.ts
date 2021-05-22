import {StringToObject} from "./stringToObject";
/**
 * Quick and dirty function to test the StringToObject type
 */
export function replaceKeysInString<K extends string>(old: K, mapTo: StringToObject<K> ): string {
    return Object.entries<string>(mapTo).reduce((text,kv) => text.replace(':'+kv[0], kv[1]), old)
}

