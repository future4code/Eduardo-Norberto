import { LinkedList, LinkedListNode } from "./exercicio1";

export class Queue {
    public nodes: LinkedList = new LinkedList();
      
  
    isEmpty(): boolean {
      return this.nodes.start === undefined;
    }
  
    enqueue(value: number): void {
      this.nodes.addToTail(value);
    }
  
    dequeue(): any {
      if (this.nodes.start) {
              const nodeToDequeue = this.nodes.start;
        this.nodes.start = this.nodes.start.next;
              return nodeToDequeue
      }
    }
  
    print(): void {
        const list = new LinkedList();
        let node: LinkedListNode | null = list.start;
        let i: number = 0
        while (node !== null) {
          i++
          console.log(`O elemento ${i} é`,node.value);
          node = node.next;
    }
  }
}