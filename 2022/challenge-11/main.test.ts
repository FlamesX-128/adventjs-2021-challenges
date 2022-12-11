import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"

import { getCompleted } from './main.ts'

// First number: Edition number
// Second number: Challenge number
// Third number: Test number

Deno.test('2022-008-001', () => assertEquals(
    getCompleted('01:00:00', '03:00:00'),
    "1/3"
))

Deno.test('2022-008-002', () => assertEquals(
    getCompleted('02:00:00', '04:00:00'),
    "1/2"
))

Deno.test('2022-008-003', () => assertEquals(
    getCompleted('02:20:20', '03:30:30'),
    "2/3"
))

Deno.test('2022-008-004', () => assertEquals(
    getCompleted('03:30:30', '05:50:50'),
    "3/5"
))
