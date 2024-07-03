export const weakMap = new WeakMap();

export function queryAPI(endPointArg) {
  const val = weakMap.get(endPointArg);
  if (!val) {
    weakMap.set(endPointArg, 1);
  } else {
    let count = weakMap.get(endPointArg);
    if (count >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endPointArg, count += 1);
  }
}
