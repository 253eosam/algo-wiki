# Passing Cars

## 문제 설명

배열 `A`에서 동쪽(0)으로 가는 차와 서쪽(1)으로 가는 차의 교차 횟수를 계산. `0` 뒤에 나오는 `1`마다 한 쌍이 됨. 1,000,000,000 초과 시 `-1` 반환.

### 입력

- `A`: 0과 1로 이루어진 배열

### 출력

- `0 → 1` 페어의 총 개수 (초과 시 `-1`)

---

## 예제

```typescript
A = [0, 1, 0, 1, 1]
```

- 첫 번째 `0`: 뒤의 `1` 3개와 페어 → 3
- 두 번째 `0`: 뒤의 `1` 2개와 페어 → 2

출력: `5`

---

## 코드 (O(N))

```typescript
function solution(A: number[]): number {
  let answer = 0
  let eastCars = 0

  for (let car of A) {
    if (car === 0) {
      eastCars++
    } else {
      answer += eastCars
    }
    if (answer > 1_000_000_000) return -1
  }

  return answer
}
```

동쪽 차 개수를 누적하고, 서쪽 차를 만날 때마다 누적값을 더한다.

- 시간 복잡도: O(N)
- 공간 복잡도: O(1)

---

## 테스트

```typescript
console.log(solution([0, 1, 0, 1, 1])) // 출력: 5
console.log(solution([1, 0, 1, 0, 1])) // 출력: 2
console.log(solution([0, 0, 0, 0, 1])) // 출력: 4
console.log(solution([1, 1, 1, 1, 0])) // 출력: 0
console.log(solution([0, 0, 0, 1, 1, 1])) // 출력: 9
```
