# 연결 리스트 (Linked List)

링크드 리스트는 데이터를 노드(node)로 연결한 **선형 자료구조**입니다. 배열과 달리 연속된 메모리 공간을 차지하지 않고, 각 노드가 데이터와 다음 노드에 대한 참조를 가집니다. 따라서 데이터를 삽입하거나 삭제할 때 효율적인 구조입니다.

## 링크드 리스트의 특징

- **동적 크기**: 크기가 정해지지 않고 필요에 따라 확장하거나 축소할 수 있습니다.
- **삽입과 삭제 용이**: 데이터를 삽입하거나 삭제할 때 메모리를 재배치하지 않아도 됩니다.
- **순차 접근**: 특정 데이터 접근 시 첫 번째 노드부터 순차적으로 탐색해야 하므로 임의 접근(random access)에는 비효율적입니다.

## 구성 요소

- **머리 노드 (Head Node)**: 연결 리스트의 시작점으로, 첫 번째 노드를 참조합니다. 머리 노드 자체는 데이터가 없습니다.
- **노드 (Node)**: 데이터와 다음 노드를 참조하는 링크를 가지고 있는 객체입니다.

![linked-list 이미지](linkedlist.png)

## TypeScript 구현 예시

```typescript
// 노드 클래스 정의
class Node<T> {
  value: T
  next: Node<T> | null

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value
    this.next = next
  }
}

// 링크드 리스트 클래스 정의
class LinkedList<T> {
  private head: Node<T> | null = null
  private tail: Node<T> | null = null
  private size: number = 0

  // 리스트가 비어있는지 확인
  isEmpty(): boolean {
    return this.size === 0
  }

  // 노드 추가
  add(value: T): void {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }

    this.size++
  }

  // 첫 번째 노드 삭제 및 반환
  pop(): T {
    if (this.isEmpty() || !this.head) {
      throw new Error('Linked list is empty!')
    }

    const removedValue = this.head.value
    this.head = this.head.next
    this.size--

    if (!this.head) {
      this.tail = null
    }

    return removedValue
  }

  // 첫 번째 노드의 값 확인
  top(): T | null {
    return this.head ? this.head.value : null
  }

  // 모든 노드의 값 출력
  print(): void {
    let current = this.head

    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
}

// 사용 예시
const linkedList = new LinkedList<number>()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)

linkedList.print() // 출력: 1 2 3 4 5

console.log(linkedList.pop()) // 출력: 1
console.log(linkedList.top()) // 출력: 2
```
