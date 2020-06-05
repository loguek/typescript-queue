import { PriorityQueue } from '../util/priorityQueue';

describe('PriorityQueue', () => {
    test('Check is empty for a new queue', () => {
        const queue = new PriorityQueue<string>();
        expect(queue.isEmpty()).toBe(true);
    });

    test('Check is empty for an initialised queue', () => {
        const queue = new PriorityQueue<string>();
        queue.enqueue('a', 1);
        expect(queue.isEmpty()).toBe(false);
    });

    test('Check is size for an empty queue', () => {
        const queue = new PriorityQueue<string>();
        expect(queue.size()).toBe(0);
    });

    test('Check is size for a populated queue', () => {
        const queue = new PriorityQueue<string>();
        const expectedSize = 10;
        for (let index = 0; index < expectedSize; index++) {
            queue.enqueue('a', index);
        }

        expect(queue.size()).toBe(expectedSize);
    });

    test('Check peek for an unpopulated queue', () => {
        const queue = new PriorityQueue<string>();

        expect(queue.peek()).toBe(null);
        expect(queue.size()).toBe(0);
    });

    test('Check peek for a populated queue', () => {
        const queue = new PriorityQueue<string>();
        queue.enqueue('a', 1);
        expect(queue.peek()).toBe('a');
        expect(queue.size()).toBe(1);
    });

    test('Check dequeue order for 2 items', () => {
        const queue = new PriorityQueue<string>();
        queue.enqueue('a', 3);
        queue.enqueue('b', 2);

        expect(queue.dequeue()).toBe('b');
        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe('a');
        expect(queue.size()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

    test('Check dequeue order for 3 items', () => {
        const queue = new PriorityQueue<string>();
        queue.enqueue('a', 1);
        queue.enqueue('b', 2);
        queue.enqueue('c', 3);

        expect(queue.dequeue()).toBe('a');
        expect(queue.size()).toBe(2);
        expect(queue.dequeue()).toBe('b');
        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe('c');
        expect(queue.size()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

    test('Check dequeue order for large queue', () => {
        const queue = new PriorityQueue<number>();
        const size = 100;
        for (let index = 0; index < size; index++) {
            queue.enqueue(size - index, size - index);
        }

        expect(queue.size()).toBe(100);
        for (let index = 0; index < size; index++) {
            expect(queue.size()).toBe(size - index);
            expect(queue.isEmpty()).toBe(false);
            expect(queue.dequeue()).toBe(index + 1);
        }

        expect(queue.isEmpty()).toBe(true);
        expect(queue.size()).toBe(0);
    });
});
