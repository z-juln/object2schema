export interface PropSchame {
  key: string | number | symbol;
  required?: boolean;
  type?: 'any' | 'unknown' | 'object' | 'number' | 'string' | 'symbol' | 'bigint' | 'boolean' | 'function' | 'undefined';
  properties?: PropSchame[];
}

const object2schema = (obj: any, opts?: { trimKey?: boolean; noSkipSymbol?: boolean; }): PropSchame[] => {
  const trimKey = opts?.trimKey ?? false;
  const noSkipSymbol = opts?.noSkipSymbol ?? false;
  try {
    const parseParent = ({ key, value }: { key: string | number | symbol; value: any }): PropSchame => {
      return {
        key: typeof key === 'string' && trimKey ? key.trim() : key,
        // @ts-ignore
        type: typeof value,
        required: true,
        properties: typeof value === 'object'
          ? Object.entries(value)
            .filter(([key]) => noSkipSymbol ? true : typeof key !== 'symbol')
            .map(([key, value]) => parseParent({ key, value }))
          : undefined,
      };
    };
    return Object.entries(obj).map(([key, value]) => parseParent({ key, value }));
  } catch (error) {
    return [];
  }
};

export default object2schema;
