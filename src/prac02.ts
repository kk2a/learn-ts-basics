export {};
import { get_age } from './util/get_age';
console.log(get_age(new Date(2005, 10, 9))); // 19

const a: Date = new Date(2005, 10, 9);
const b: Date = new Date(2005, 10, 9);
console.log(a === b); // false