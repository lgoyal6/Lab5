// unit.test.js
import * as functions from '../code-to-unit-test/unit-test-me.js';
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// TODO - Part 2

test('valid phone numbers return true', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone numbers return false', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
  expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid emails return true', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
  expect(functions.isEmail('user@school.edu')).toBe(true);
});

test('invalid emails return false', () => {
  expect(functions.isEmail('testexample.com')).toBe(false);
  expect(functions.isEmail('user@school')).toBe(false);
});

test('valid strong passwords return true', () => {
  expect(functions.isStrongPassword('A123')).toBe(true);
  expect(functions.isStrongPassword('hello_123')).toBe(true);
});

test('invalid strong passwords return false', () => {
  expect(functions.isStrongPassword('1234')).toBe(false);
  expect(functions.isStrongPassword('A!23')).toBe(false);
});

test('valid dates return true', () => {
  expect(functions.isDate('1/1/2026')).toBe(true);
  expect(functions.isDate('12/25/2026')).toBe(true);
});

test('invalid dates return false', () => {
  expect(functions.isDate('2026/1/1')).toBe(false);
  expect(functions.isDate('12-25-2026')).toBe(false);
});

test('valid hex colors return true', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
  expect(functions.isHexColor('#A1B2C3')).toBe(true);
});

test('invalid hex colors return false', () => {
  expect(functions.isHexColor('#GGG')).toBe(false);
  expect(functions.isHexColor('12345')).toBe(false);
});
