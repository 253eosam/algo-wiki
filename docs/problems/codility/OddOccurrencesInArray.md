# OddOccurrencesInArray

## 문제 설명

배열 `A`에서 짝을 이루지 못하는 유일한 숫자를 찾는 문제. 배열에는 짝을 이루는 숫자들이 있으며, 단 하나의 숫자만 짝이 없다.

### 예제

| 입력 (`A`)              | 결과 |
| ----------------------- | ---- |
| `[9, 3, 9, 3, 9, 7, 9]` | `7`  |
| `[1, 1, 2, 2, 3]`       | `3`  |
| `[42]`                  | `42` |

---

## 풀이

Set을 활용하여 한 번 등장한 숫자는 추가, 두 번째 등장하면 삭제. 마지막에 남은 값이 정답.

---

## 코드

```typescript
function solution(A: number[]): number {
  const set = new Set<number>()

  for (let element of A) {
    if (set.has(element)) set.delete(element)
    else set.add(element)
  }

  return +Array.from(set.values())[0]
}
```

---

## 시간 복잡도

- 배열 순회: O(N)
- Set 추가/삭제: 평균 O(1)
- 전체: O(N)

---

## 실행 예제

```typescript
console.log(solution([9, 3, 9, 3, 9, 7, 9])) // 출력: 7
console.log(solution([1, 1, 2, 2, 3])) // 출력: 3
console.log(solution([42])) // 출력: 42
```
