# 0. Quick Sort (Custom)

## 문제 설명

주어진 숫자 배열을 퀵소트(Quick Sort) 알고리즘을 사용해 오름차순으로 정렬하세요. 퀵소트는 분할 정복(Divide and Conquer) 전략을 기반으로 하는 효율적인 정렬 알고리즘으로, 평균적으로 매우 빠른 성능을 보여줍니다.

## 💡 문제 해결 전략

- 배열이 비어있거나 요소가 하나인 경우 그대로 반환합니다 (base case).
- 기준점(Pivot)을 배열의 마지막 요소로 선택합니다.
- pivot보다 작은 요소는 `left`, 큰 요소는 `right`, 같은 요소는 `equal` 배열에 따로 저장합니다.
- 각 부분 배열에 대해 재귀적으로 퀵소트를 수행한 뒤, 결과를 병합합니다.

## 🧠 TypeScript 코드

```ts
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  let pivot = arr[Math.floor(arr.length - 1)]

  const left: number[] = []
  const right: number[] = []
  const equal: number[] = []

  for (let item of arr) {
    if (item < pivot) left.push(item)
    else if (pivot < item) right.push(item)
    else equal.push(item)
  }

  return [...quickSort(left), ...equal, ...quickSort(right)]
}

const arr = [3, 6, 2, 8, 4, 7, 5, 1]
console.log(quickSort(arr))
```

## 🛠️ 코드 동작 원리

1. **Base Case 처리**: 배열 길이가 0 또는 1이면 바로 반환합니다.
2. **Pivot 설정**: 배열의 마지막 요소를 기준점(pivot)으로 설정합니다.
3. **분할 과정**:
   - 배열을 순회하면서 pivot보다 작은 값은 `left`, 큰 값은 `right`, 같은 값은 `equal` 배열에 저장합니다.
4. **재귀 호출 및 병합**:
   - `left`와 `right` 배열에 대해 `quickSort`를 재귀 호출하고, 정렬된 결과를 `[left, equal, right]` 순서로 병합하여 반환합니다.

## 📊 시간 및 공간 복잡도 분석

| 구분        | 평균       | 최악  |
| ----------- | ---------- | ----- |
| 시간 복잡도 | O(n log n) | O(n²) |
| 공간 복잡도 | O(n)       | O(n)  |

- 평균적으로는 매우 빠르지만, 이미 정렬된 배열 등 특정 케이스에서는 최악의 성능(O(n^2))이 나올 수 있습니다.
- 공간 복잡도는 추가 배열 사용으로 인해 O(n)입니다.

## 🧩 다른 풀이 방법과 비교

| 알고리즘    | 평균 시간 복잡도 | 공간 복잡도 | 비고                        |
| ----------- | ---------------- | ----------- | --------------------------- |
| Quick Sort  | O(n log n)       | O(n)        | 평균 성능 우수, 불안정 정렬 |
| Merge Sort  | O(n log n)       | O(n)        | 안정 정렬, 공간 사용 큼     |
| Heap Sort   | O(n log n)       | O(1)        | 불안정 정렬, 제자리 정렬    |
| Bubble Sort | O(n^2)           | O(1)        | 구현 쉬우나 비효율적        |

## 📝 요점 정리

- 퀵소트는 "분할 정복" 기반의 빠른 정렬 알고리즘입니다.
- pivot을 기준으로 배열을 분할하고 재귀적으로 정렬합니다.
- 평균 시간복잡도는 O(n log n)으로 매우 효율적입니다.
- 하지만 최악의 경우 성능 저하(O(n^2))가 있으므로 pivot 선택이 중요합니다.
- 공간 복잡도는 추가 배열 사용으로 인해 O(n)입니다.
