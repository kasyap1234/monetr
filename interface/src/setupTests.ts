// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { cleanup, configure } from '@testing-library/react';

configure({
  asyncUtilTimeout: 10000,
});

beforeAll(() => {
  // https://github.com/jsdom/jsdom/issues/3368
  global.ResizeObserver = class ResizeObserver {
    public observe() {
      // do nothing
    }
    public unobserve() {
      // do nothing
    }
    public disconnect() {
      // do nothing
    }
  };
});

afterEach(() => {
  cleanup();
});
