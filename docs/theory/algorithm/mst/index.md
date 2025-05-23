# 최소신장트리 (Minimum Spanning Tree)

## 정의 🤔

무향 가중치 그래프에서 신장 트리를 구하는 간선들의 가중치의 합이 최소인 신장 트리

> n개의 정점으로 이루어진 무향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리

![그래프](https://gmlwjd9405.github.io/images/algorithm-mst/spanning-tree.png)

쉽게말해서 그래프에 방향이 주워지지 않고 각 선들은 비용이라는 값이 존재. 그래프의 노드들을 최소한의 비용을 이용해서 모두 연결하는 방법입니다. (최대한 쉽게 설명한거임... )

## 문제

1. 모든 정점을 연결하는 간선들의 가중치의 합이 최소가 되는 트리를 구하여라.
2. 두 정점 사이의 최소 비용의 경로를 찾고 그 비용을 구하여라.

<details>
    <summary><strong>Example</strong></summary>
    <p>
<img src="https://gmlwjd9405.github.io/images/algorithm-mst/mst-example.png" alt="네트워크 연결 화면">
`Alpha`라는 동네에 모든 주민들은 인터넷을 연결할려고합니다.

이 인터넷은 물리적인 선을 이용하여 해당 주민들의 집을 한번씩은 연결해야 합니다.

따라서, 인터넷회사에서는 최소한의 비용을 이용해서 모든 집을 연결할려고합니다.

이때 MST 알고리즘을 이용해서 동네 주민들의 집을 모두 연결하는 최소 비용을 그래프를 만들 수 있습니다.
</p>

</details>

## 해결 방법

- [Prim 알고리즘](https://253eosam.github.io/algo-wiki/theory/algorithm/prim.md)
- [KRUSKAL 알고리즘](https://253eosam.github.io/algo-wiki/theory/algorithm/kruskal.md)
