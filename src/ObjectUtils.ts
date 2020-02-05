export class ObjectUtils {

  static merge<T, V>(source: T, ...patches: V[]): T {
    const isArray = Array.isArray(source);
    const copy = isArray ? [...(source as unknown as any[])] : { ...source }
    return ObjectUtils.apply(isArray, copy, patches)
  }

  private static apply<T>(isArray: boolean, copy: any, patch: any): T {
    if (patch && typeof patch === 'object') {
      if (Array.isArray(patch)) {
        patch.forEach(p => copy = ObjectUtils.apply(isArray, copy, p));
      }
      else {
        Object.keys(patch).forEach((k: string | number) => {
          const val = patch[k]
          if (typeof val === 'function') {
            copy[k] = val(copy[k], ObjectUtils.merge);
          }
          else if (typeof val === 'undefined') {
            isArray && isFinite(k as any) ? copy.splice(k, 1) : delete copy[k];
          }
          else if (val === null || typeof val !== 'object' || Array.isArray(val)) {
            copy[k] = val;
          }
          else if (typeof copy[k] === 'object') {
            copy[k] = val === copy[k] ? val : ObjectUtils.merge(copy[k], val);
          }
          else {
            copy[k] = ObjectUtils.apply(false, {}, val);
          }
        });
      }
    } else if (typeof patch === 'function') {
      copy = patch(copy, ObjectUtils.merge);
    }
    return copy;
  }
}