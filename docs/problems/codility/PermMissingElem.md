# PermMissingElem

## 문제 설명

길이 `N`인 배열 `A`에는 `1`부터 `N+1`까지의 정수 중 하나만 빠져 있다. 누락된 숫자를 찾아 반환.

---

## 조건

- 배열 크기 `N`, 원래 `1`~`N+1` 중 하나 누락
- 누락된 숫자를 반환

---

## 예제

| 입력 (`A`)     | 출력 |
| -------------- | ---- |
| `[2, 3, 1, 5]` | `4`  |
| `[1]`          | `2`  |
| `[]`           | `1`  |
| `[2, 3, 4, 5]` | `1`  |
| `[1, 2, 3, 4]` | `5`  |

---

## 풀이

1. `1`부터 `N+1`까지의 합: `totalSum = (N+1)(N+2)/2`
2. 배열의 실제 합: `actualSum`
3. `totalSum - actualSum` = 누락된 숫자

---

## 코드

```typescript
function solution(A: number[]): number {
  const N = A.length + 1
  const totalSum = (N * (N + 1)) / 2
  const actualSum = A.reduce((sum, num) => sum + num, 0)

  return totalSum - actualSum
}
```

- 시간 복잡도: O(N)
- 정렬 방식(O(N log N))보다 효율적

---

## 실행 예제

```typescript
console.log(solution([2, 3, 1, 5])) // 출력: 4
console.log(solution([1])) // 출력: 2
console.log(solution([])) // 출력: 1
console.log(solution([2, 3, 4, 5])) // 출력: 1
console.log(solution([1, 2, 3, 4])) // 출력: 5
```
