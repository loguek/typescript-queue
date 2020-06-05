class PriorityElement<T> {
    public value: T;
    public priority: number;

    constructor(element: T, priority: number) {
        this.value = element;
        this.priority = priority;
    }
}

/** Implementation of a Priority Queue using a min heap i.e. lower the priority items will be removed first. */
export class PriorityQueue<T> {
    private heap: PriorityElement<T>[] = [null];

    peek(): T {
        if (this.isEmpty()) {
            return null;
        }

        return this.heap[1].value;
    }

    enqueue(value: T, priority: number): void {
        const element = new PriorityElement<T>(value, priority);

        this.heap.push(element);
        let currentIndex = this.heap.length - 1;
        let currentParentIndex = Math.floor(currentIndex / 2);

        while (
            this.heap[currentParentIndex] &&
            this.heap[currentIndex].priority < this.heap[currentParentIndex].priority
        ) {
            this.swapInHeap(currentIndex, currentParentIndex);
            currentIndex = currentParentIndex;
            currentParentIndex = Math.floor(currentIndex / 2);
        }
    }

    private swapInHeap(pos1: number, pos2: number) {
        [this.heap[pos1], this.heap[pos2]] = [this.heap[pos2], this.heap[pos1]];
    }

    dequeue(): T {
        const highestPriority = this.heap[1];
        if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length === 3) {
                if (this.heap[1].priority > this.heap[2].priority) {
                    this.swapInHeap(1, 2);
                }
                return highestPriority.value;
            }

            let currentIndex = 1;
            let leftChildIndex = currentIndex * 2;
            let rightChildIndex = currentIndex * 2 + 1;
            while (
                this.heap[leftChildIndex] &&
                this.heap[rightChildIndex] &&
                (this.heap[leftChildIndex].priority < this.heap[currentIndex].priority ||
                    this.heap[rightChildIndex].priority < this.heap[currentIndex].priority)
            ) {
                if (this.heap[leftChildIndex].priority < this.heap[rightChildIndex].priority) {
                    this.swapInHeap(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    this.swapInHeap(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }

                leftChildIndex = currentIndex * 2;
                rightChildIndex = currentIndex * 2 + 1;
            }
        } else {
            return null;
        }

        return highestPriority.value;
    }

    size(): number {
        return Math.max(0, this.heap.length - 1);
    }

    isEmpty(): boolean {
        return this.heap.length <= 1;
    }
}
