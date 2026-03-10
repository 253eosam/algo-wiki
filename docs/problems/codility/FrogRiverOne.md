# FrogRiverOne

## 문제 설명

개구리가 위치 `0`에서 위치 `X`로 이동해야 한다. 배열 `A`의 인덱스는 시간, 값은 나뭇잎이 떨어진 위치를 나타낸다. 1부터 X까지 모든 위치에 나뭇잎이 채워지는 최소 시간을 구하고, 불가능하면 `-1`을 반환.

### 입력

- 정수 `X` (목표 위치)
- 배열 `A` (각 시간 `t`에 `A[t]` 위치에 나뭇잎이 떨어짐)

### 출력

- 개구리가 `X`까지 도달할 수 있는 최소 시간, 불가능하면 `-1`

---

## 예제

```typescript
X = 5
A = [1, 3, 1, 4, 2, 3, 5, 4]
```

- 시간 0: 위치 1
- 시간 1: 위치 3
- 시간 3: 위치 4
- 시간 4: 위치 2
- 시간 6: 위치 5 (1~5 모두 채워짐)

결과: `6`

---

## 이전 코드 (O(N * X))

```typescript
function solution(X: number, A: number[]): number {
  const leaves = Array(X + 1).fill(false)
  leaves[0] = true

  const isFull = () => leaves.every(Boolean)
  let leafIdx = 0
  while (leafIdx < A.length) {
    leaves[A[leafIdx]] = true
    if (isFull()) break
    leafIdx++
  }
  return leafIdx
}
```

매 반복마다 `every()`로 전체 배열을 확인하기 때문에 비효율적.

---

## 개선된 코드 (O(N))

```typescript
function solution(X: number, A: number[]): number {
  const leaves = new Set<number>()

  for (let time = 0; time < A.length; time++) {
    leaves.add(A[time])
    if (leaves.size === X) return time
  }

  return -1
}
```

`Set.size === X`로 조건 판별하여 O(N)에 해결.

---

## 테스트

```typescript
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])) // 출력: 6
console.log(solution(5, [1, 3, 1, 4, 2, 3])) // 출력: -1 (5가 없음)
console.log(solution(2, [2, 2, 2, 2, 2, 2])) // 출력: -1 (1이 없음)
console.log(solution(1, [1])) // 출력: 0
```
