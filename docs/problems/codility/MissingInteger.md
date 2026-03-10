# Missing Integer

## 문제 설명

배열 `A`에 존재하지 않는 가장 작은 양의 정수(1 이상)를 찾아 반환.

### 입력

- `A`: 정수 배열 (음수, 양수 포함 가능)

### 출력

- 배열에 없는 가장 작은 양의 정수

---

## 예제

```typescript
A = [1, 3, 6, 4, 1, 2] // 5가 없음 → 출력: 5
```

---

## 코드 (O(N))

```typescript
function solution(A: number[]): number {
  const set = new Set<number>(A)
  let answer = 1
  while (set.has(answer)) {
    answer++
  }
  return answer
}
```

Set에 배열을 넣고 1부터 순서대로 존재 여부를 확인.

- 시간 복잡도: O(N)
- 공간 복잡도: O(N)

---

## 테스트

```typescript
console.log(solution([1, 3, 6, 4, 1, 2])) // 출력: 5
console.log(solution([1, 2, 3])) // 출력: 4
console.log(solution([-1, -3])) // 출력: 1
console.log(solution([2])) // 출력: 1
console.log(solution([5, 6, 7, 8])) // 출력: 1
```
