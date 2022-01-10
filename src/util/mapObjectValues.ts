type ExtractRecordValueType<R extends Record<any, any>> = R extends Record<
  any,
  infer V
>
  ? V
  : never;

type MappedObjectValue<OBJECT extends Record<any, any>, NEW_TYPE> = {
  [KEY in keyof OBJECT]: NEW_TYPE;
};

export function mapObjectValues<
  NEW_VALUE_TYPE,
  OBJECT extends Record<string, any>,
  OLD_VALUE_TYPE extends ExtractRecordValueType<OBJECT>,
>(
  objectA: OBJECT,
  mapFn: (old: OLD_VALUE_TYPE, key: keyof OBJECT) => NEW_VALUE_TYPE,
): MappedObjectValue<OBJECT, NEW_VALUE_TYPE> {
  return Object.fromEntries(
    Object.entries(objectA).map(([key, value]) => [key, mapFn(value, key)]),
  ) as MappedObjectValue<OBJECT, NEW_VALUE_TYPE>;
}
