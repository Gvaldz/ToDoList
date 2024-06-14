import Node from "./Node.js";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(element) {
        const newNode = new Node(element);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.head.previous = this.tail;
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            this.tail.next = this.head;
            this.head.previous = this.tail;
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        if (!current) return count; // If list is empty
        while (current && current !== this.tail) {
            count++;
            current = current.next;
        }
        return count + 1;
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }
        if (index === 0) {
            return this.head;
        }

        let current = this.head;
        let count = 0;
        while (current && count < index) {
            count++;
            current = current.next;
        }
        return current;
    }

    removeNodeAt(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }

        let current = this.getNodeAt(index);

        if (current === this.head) {
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.previous = this.tail;
                this.tail.next = this.head;
            }
        } else if (current === this.tail) {
            this.tail = this.tail.previous;
            this.tail.next = this.head;
            this.head.previous = this.tail;
        } else {
            current.previous.next = current.next;
            current.next.previous = current.previous;
        }

        return current;
    }

    remove(data) {
        if (!this.head) return;

        let current = this.head;

        do {
            if (current.data.titulo === data.titulo && current.data.descripcion === data.descripcion) {
                if (current === this.head) {
                    if (this.head === this.tail) {
                        this.head = null;
                        this.tail = null;
                    } else {
                        this.head = this.head.next;
                        this.head.previous = this.tail;
                        this.tail.next = this.head;
                    }
                } else if (current === this.tail) {
                    this.tail = this.tail.previous;
                    this.tail.next = this.head;
                    this.head.previous = this.tail;
                } else {
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                }
                return;
            }
            current = current.next;
        } while (current !== this.head);
    }
}
