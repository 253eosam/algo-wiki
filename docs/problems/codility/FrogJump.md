# FrogJump

## 문제 설명

개구리가 위치 `X`에서 시작하여 목표 지점 `Y`로 이동한다. 한 번에 `D`만큼 점프할 수 있을 때, `Y` 이상에 도달하는 데 필요한 최소 점프 횟수를 구하라.

---

## 조건

- 한 번에 정확히 `D`만큼 점프
- `X >= Y`인 경우 점프 불필요 (결과 `0`)

---

## 예제

| `X`  | `Y`  | `D`  | 점프 횟수 |
| ---- | ---- | ---- | --------- |
| `10` | `85` | `30` | `3`       |
| `0`  | `75` | `20` | `4`       |
| `10` | `10` | `5`  | `0`       |

첫 번째 케이스: `10 → 40 → 70 → 100` → 3번

---

## 코드

```typescript
function solution(X: number, Y: number, D: number): number {
  const distance = Y - X
  return distance % D === 0 ? distance / D : Math.floor(distance / D) + 1
}
```

거리를 계산한 후 올림 나눗셈으로 점프 횟수를 구한다.

---

## 시간 복잡도

- O(1) — 상수 시간

---

## 실행 예제

```typescript
console.log(solution(10, 85, 30)) // 출력: 3
console.log(solution(0, 75, 20)) // 출력: 4
console.log(solution(10, 10, 5)) // 출력: 0
```
