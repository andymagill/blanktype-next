import { expect, test, vi } from 'vitest';
import { add } from './add';

// Disables server-side check
vi.mock('server-only', () => {
  return {};
});

test('Test functions that import server-only', () => {
  expect(add(1, 2)).toBe(3);
});
