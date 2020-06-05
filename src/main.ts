import { PriorityQueue } from './util/priorityQueue';

const queue = new PriorityQueue();
queue.enqueue('c', 2);
queue.enqueue('a', 5);
queue.enqueue('b', 1);
queue.enqueue('x', 10);

while (queue.isEmpty() === false) {
    console.log(queue.dequeue());
}
