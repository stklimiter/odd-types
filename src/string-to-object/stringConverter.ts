/**
 * Quick and dirty class to test the type
 */
import {StringToObject} from "./stringToObject";

export function convertStringToObject<K extends string>(old: K, mapTo: StringToObject<K> & object): string {
    return Object.entries<string>(mapTo).reduce((text,kv) => text.replace(kv[0], kv[1]), old)
}

