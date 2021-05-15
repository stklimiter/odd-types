import {replaceKeysInString} from "./stringConverter";

test('Three objects in a string', () => {
   /**
    * Changing the keys in the map, will result in a TS2345
    */
   let result = replaceKeysInString("1:second/:third/4/:fifth/6",{second: "2", third: "3", fifth: "5"})
   expect(result).toBe("1:2/:3/4/:5/6")
});

