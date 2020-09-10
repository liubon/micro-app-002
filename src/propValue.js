import { useState } from 'react';
import { createModel } from 'hox';

let set;
function usePropValue() {
  const [value, setValue] = useState(null);
  const commit = (value) => setValue(value);
  set = commit;
  return {
    value,
    commit,
  };
}
export function initValue(value) {
  set(value);
}
export default createModel(usePropValue);
