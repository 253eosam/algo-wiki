# Count Div

## 문제 설명

세 정수 `A, B, K`가 주어질 때, `A` 이상 `B` 이하에서 `K`로 나누어떨어지는 숫자의 개수를 반환.

### 입력

- `A, B`: 정수 (0 ≤ A ≤ B ≤ 2,000,000,000)
- `K`: 정수 (1 ≤ K ≤ 2,000,000,000)

### 출력

- `A` 이상 `B` 이하에서 `K`의 배수 개수

---

## 예제

```typescript
;(A = 6), (B = 11), (K = 2)
```

2의 배수: `[6, 8, 10]` → 3개

---

## 코드 (O(1))

```typescript
function solution(A: number, B: number, K: number): number {
  const left = A % K === 0 ? Math.floor(A / K) : Math.floor(A / K) + 1
  const right = Math.floor(B / K)
  return right - left + 1
}
```

---

## 풀이

1. `B`까지 K의 배수 개수: `Math.floor(B / K)`
2. `A` 이전까지 K의 배수 개수:
   - `A % K === 0`이면 `A`도 포함 → `Math.floor(A / K)`
   - 아니면 `Math.floor(A / K) + 1`로 보정
3. 두 값의 차이 + 1

시간 복잡도 O(1), 공간 복잡도 O(1).

---

## 테스트

```typescript
console.log(solution(6, 11, 2)) // 출력: 3
console.log(solution(1, 10, 1)) // 출력: 10
console.log(solution(10, 10, 5)) // 출력: 1
console.log(solution(10, 10, 7)) // 출력: 0
console.log(solution(0, 10, 3)) // 출력: 4
console.log(solution(0, 0, 1)) // 출력: 1
console.log(solution(1, 1_000_000_000, 1)) // 출력: 1_000_000_000
```
