# Max Counters

## 문제 설명

정수 `N`과 배열 `A`가 주어질 때, 길이 `N`의 배열에 다음 연산을 수행:

1. `A[k] = X` (1 ≤ X ≤ N) → `answer[X-1]` 값을 1 증가
2. `A[k] = N + 1` → 모든 요소를 현재 최대값으로 설정

---

## 예제

```typescript
N = 5
A = [3, 4, 4, 6, 1, 4, 4]
```

| 연산                     | 배열 상태          |
| ------------------------ | ------------------ |
| `A[0] = 3`               | `[0, 0, 1, 0, 0]` |
| `A[1] = 4`               | `[0, 0, 1, 1, 0]` |
| `A[2] = 4`               | `[0, 0, 1, 2, 0]` |
| `A[3] = 6` (max counter) | `[2, 2, 2, 2, 2]` |
| `A[4] = 1`               | `[3, 2, 2, 2, 2]` |
| `A[5] = 4`               | `[3, 2, 2, 3, 2]` |
| `A[6] = 4`               | `[3, 2, 2, 4, 2]` |

결과: `[3, 2, 2, 4, 2]`

---

## 이전 코드 (O(N * M))

```typescript
function solution(N: number, A: number[]): number[] {
  let answer = Array(N).fill(0)
  let maxNum = 0

  for (let element of A) {
    if (element === N + 1) answer = Array(N).fill(maxNum) // 매번 전체 초기화
    else {
      maxNum = Math.max(maxNum, ++answer[element - 1])
    }
  }
  return answer
}
```

`N + 1` 연산마다 배열 전체를 초기화하여 O(N * M).

---

## 개선된 코드 (O(N + M))

```typescript
function solution(N: number, A: number[]): number[] {
  let answer = Array(N).fill(0)
  let maxNum = 0
  let lastMaxUpdate = 0

  for (let element of A) {
    if (element === N + 1) {
      lastMaxUpdate = maxNum
    } else {
      if (answer[element - 1] < lastMaxUpdate) {
        answer[element - 1] = lastMaxUpdate
      }
      answer[element - 1] += 1
      maxNum = Math.max(maxNum, answer[element - 1])
    }
  }

  // 마지막으로 업데이트 안 된 값들을 일괄 적용
  for (let i = 0; i < N; i++) {
    if (answer[i] < lastMaxUpdate) {
      answer[i] = lastMaxUpdate
    }
  }

  return answer
}
```

`lastMaxUpdate`로 lazy propagation하여 배열 전체 초기화를 지연시킨다.

---

## 테스트

```typescript
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])) // 출력: [3, 2, 2, 4, 2]
console.log(solution(3, [1, 1, 2, 2, 3, 3, 3])) // 출력: [2, 2, 3]
console.log(solution(5, [6, 6, 6, 6])) // 출력: [0, 0, 0, 0, 0]
```
