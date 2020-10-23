// src/jest-config/globalMocks.ts
const mock = () => {
    let storage = {};
    return {
      getItem: key => (key in storage ? storage[key] : null),
      setItem: (key, value) => (storage[key] = value || ''),
      removeItem: key => delete storage[key],
      clear: () => (storage = {}),
    };
  };
  
  Object.defineProperty(window, 'sessionStorage', { value: mock() });
  Object.defineProperty(window, 'sessionStorage', { value: mock() });
  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance'],
  });