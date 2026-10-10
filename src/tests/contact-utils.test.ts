import { describe, expect, test } from 'bun:test';

import {
  countByFirstLetter,
  searchContacts,
  sortContactsByName,
  updateContact,
  type Contact,
} from '../contact-utils.js';

function makeContact(overrides: Partial<Contact> = {}): Contact {
  return {
    id: 1,
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    active: true,
    ...overrides,
  };
}

const sampleContacts: Contact[] = [
  makeContact({ id: 1, name: 'Charlie', email: 'c@example.com' }),
  makeContact({ id: 2, name: 'Alice', email: 'a@example.com' }),
  makeContact({ id: 3, name: 'Anna', email: 'anna@example.com' }),
  makeContact({ id: 4, name: 'Bob', email: 'b@example.com' }),
];

describe('searchContacts', () => {
  test('returns all contacts when query is empty', () => {
    expect(searchContacts(sampleContacts, '')).toEqual(sampleContacts);
  });

  test('matches names case-insensitively', () => {
    expect(searchContacts(sampleContacts, 'ali')).toEqual([
      makeContact({ id: 2, name: 'Alice', email: 'a@example.com' }),
    ]);
    expect(searchContacts(sampleContacts, 'ANN')).toEqual([
      makeContact({ id: 3, name: 'Anna', email: 'anna@example.com' }),
    ]);
  });

  test('returns empty array when nothing matches', () => {
    expect(searchContacts(sampleContacts, 'xyz')).toEqual([]);
  });

  test('matches substring anywhere in the name', () => {
    expect(searchContacts(sampleContacts, 'ar')).toEqual([
      makeContact({ id: 1, name: 'Charlie', email: 'c@example.com' }),
    ]);
  });
});

describe('countByFirstLetter', () => {
  test('counts contacts grouped by first letter of name (uppercase keys)', () => {
    expect(countByFirstLetter(sampleContacts)).toEqual({
      A: 2,
      B: 1,
      C: 1,
    });
  });

  test('returns {} for an empty contact list', () => {
    expect(countByFirstLetter([])).toEqual({});
  });

  test('uppercases the first letter of mixed-case names', () => {
    expect(
      countByFirstLetter([makeContact({ name: 'zara' }), makeContact({ name: 'Zoe' })]),
    ).toEqual({ Z: 2 });
  });
});

describe('sortContactsByName', () => {
  test('sorts by name A→Z', () => {
    const sorted = sortContactsByName(sampleContacts);
    expect(sorted.map((c) => c.name)).toEqual(['Alice', 'Anna', 'Bob', 'Charlie']);
  });

  test('does not mutate the original array', () => {
    const original = [...sampleContacts];
    sortContactsByName(sampleContacts);
    expect(sampleContacts).toEqual(original);
  });

  test('returns a new array reference', () => {
    const sorted = sortContactsByName(sampleContacts);
    expect(sorted).not.toBe(sampleContacts);
  });
});

describe('updateContact', () => {
  test('merges changes without dropping id', () => {
    const original = makeContact({ id: 99, name: 'Pat', email: 'pat@example.com' });
    const updated = updateContact(original, { email: 'patricia@example.com' });

    expect(updated.id).toBe(99);
    expect(updated.email).toBe('patricia@example.com');
  });

  test('leaves unspecified fields unchanged', () => {
    const original = makeContact({
      id: 7,
      name: 'Sam',
      email: 'sam@example.com',
      active: false,
    });
    const updated = updateContact(original, { active: true });

    expect(updated).toEqual({
      id: 7,
      name: 'Sam',
      email: 'sam@example.com',
      active: true,
    });
  });

  test('updates name only', () => {
    const original = makeContact({ id: 42, name: 'Before' });
    const updated = updateContact(original, { name: 'After' });

    expect(updated).toEqual({
      id: 42,
      name: 'After',
      email: 'ada@example.com',
      active: true,
    });
    expect(updated).not.toBe(original);
  });
});
