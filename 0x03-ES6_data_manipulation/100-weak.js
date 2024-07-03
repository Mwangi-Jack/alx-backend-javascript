export const weakMap = new WeakMap();

export function queryAPI(endPointArg) {
  let count = weakMap.get(endPointArg) || 0;
  count += 1;
  weakMap.set(endPointArg, count);
  if (count >= 5) throw new Error('Endpoint load is high');
}
