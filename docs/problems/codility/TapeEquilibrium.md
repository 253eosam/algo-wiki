# TapeEquilibrium

## 문제 설명

배열 `A`를 두 부분으로 나눈 후, 두 부분의 합의 차이(절대값)를 최소화하는 문제.

### 예제

```typescript
A = [3, 1, 2, 4, 3]
결과: 1
```

## 풀이

Prefix Sum을 활용하여 O(N)에 해결.

1. 배열 전체 합(`totalSum`)을 구한다
2. 왼쪽부터 순회하며 `leftSum`을 누적하고, `rightSum = totalSum - leftSum`으로 계산
3. `|leftSum - rightSum|`의 최소값을 갱신

## 코드

```typescript
function solution(A: number[]): number {
  let totalSum = A.reduce((acc, num) => acc + num, 0)
  let leftSum = 0
  let minDiff = Infinity

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i]
    let rightSum = totalSum - leftSum
    let diff = Math.abs(leftSum - rightSum)
    minDiff = Math.min(minDiff, diff)
  }

  return minDiff
}
```

## 시간 복잡도

- `totalSum` 계산: O(N)
- `for` 루프: O(N)
- 전체: O(N)

## 테스트

```typescript
console.log(solution([3, 1, 2, 4, 3])) // 출력: 1
console.log(solution([-10, 10])) // 출력: 20
console.log(solution([1, 2, 3, 4, 5])) // 출력: 3
```
