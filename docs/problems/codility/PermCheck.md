# PermCheck

## 문제 설명

배열 `A`가 1부터 `N`까지 모든 숫자를 포함하는 순열(permutation)인지 확인. 순열이면 `1`, 아니면 `0` 반환.

### 입력

- 정수 배열 `A` (길이 `N`, 원소 값 범위 `1` ~ `N`)

### 출력

- `A`가 순열이면 `1`, 아니면 `0`

---

## 예제

```typescript
A = [4, 1, 3, 2] // 1~4 모두 포함 → 1
A = [4, 1, 3] // 2가 없음 → 0
A = [1, 1, 2, 3] // 1 중복 → 0
```

---

## 이전 코드 (O(N log N))

```typescript
function solution(A: number[]): number {
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0
  }
  return 1
}
```

정렬 사용으로 O(N log N).

---

## 개선된 코드 (O(N))

```typescript
function solution(A: number[]): number {
  const seen = new Set<number>()
  for (const num of A) {
    if (num > A.length || seen.has(num)) return 0
    seen.add(num)
  }
  return 1
}
```

`Set`으로 중복과 범위 초과를 O(1)에 검사하여 전체 O(N).

---

## 테스트

```typescript
console.log(solution([4, 1, 3, 2])) // 출력: 1
console.log(solution([4, 1, 3])) // 출력: 0
console.log(solution([1, 1, 2, 3])) // 출력: 0
console.log(solution([2, 3, 4, 5])) // 출력: 0
```
