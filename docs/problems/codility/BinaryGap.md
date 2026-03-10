# Binary Gap

## 문제 설명

양의 정수 `N`을 이진수로 변환한 후, 1과 1 사이에 있는 연속된 0의 최대 길이(Binary Gap)를 구하는 문제.

### 예시

| N (십진수) | 이진수 표현  | Binary Gap 길이 |
| ---------- | ------------ | --------------- |
| `9`        | `1001`       | `2`             |
| `529`      | `1000010001` | `4`             |
| `20`       | `10100`      | `1`             |
| `15`       | `1111`       | `0`             |

---

## 풀이

1. `N`을 이진수 문자열로 변환
2. `1`을 기준으로 탐색하면서, 다음 `1`까지의 `0` 개수를 계산
3. 최대값 갱신

---

## 코드

```typescript
function solution(N: number): number {
  const binary = N.toString(2)
  let answer = 0

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') continue

    for (let j = i + 1; j < binary.length; j++) {
      if (binary[j] === '1') {
        answer = Math.max(answer, j - i - 1)
        i = j - 1
        break
      }
    }
  }

  return answer
}
```

---

## 시간 복잡도

- `O(log N)` — 이진수 비트 수만큼 순회

---

## 실행 예제

```typescript
console.log(solution(9)) // 출력: 2
console.log(solution(529)) // 출력: 4
console.log(solution(20)) // 출력: 1
console.log(solution(15)) // 출력: 0
```
