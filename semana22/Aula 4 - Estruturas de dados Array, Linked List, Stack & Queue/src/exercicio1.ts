export class LinkedList {
    public start: LinkedListNode | null = null;
  
    public addToTail(value: any): void {
      const newNode = new LinkedListNode();
      newNode.value = value;
  
      if (this.start === null) {
        this.start = newNode;
        return;
      }
  
      let node = this.start;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = newNode;
    }
  }
  
  export class LinkedListNode {
    public value: any;
    public next: LinkedListNode | null = null;
  }
  
  const list = new LinkedList();
  
  list.addToTail(8);
  list.addToTail(9);
  list.addToTail(7);
  list.addToTail(6)
  
  let node: LinkedListNode | null = list.start;
  let i: number = 0
  while (node !== null) {
    i++
    console.log(`O elemento ${i} é`,node.value);
    node = node.next;
  }