import{_ as i,c as a,o as h,ae as n}from"./chunks/framework.Dh1jimFm.js";const t="/assets/bs1.DLohFVyy.png",l="/assets/bs2.ClVs_bxm.png",F=JSON.parse('{"title":"이진 탐색(Binary Search)","description":"","frontmatter":{},"headers":[],"relativePath":"theory/algorithm/binary-search/index.md","filePath":"theory/algorithm/binary-search/index.md"}'),k={name:"theory/algorithm/binary-search/index.md"};function p(e,s,r,E,d,g){return h(),a("div",null,s[0]||(s[0]=[n('<h1 id="이진-탐색-binary-search" tabindex="-1">이진 탐색(Binary Search) <a class="header-anchor" href="#이진-탐색-binary-search" aria-label="Permalink to &quot;이진 탐색(Binary Search)&quot;">​</a></h1><h2 id="정의" tabindex="-1">정의 <a class="header-anchor" href="#정의" aria-label="Permalink to &quot;정의&quot;">​</a></h2><p>정렬된 배열의 중앙에 위치한 원소와 비교 되풀이.</p><h2 id="탐색-방법" tabindex="-1">탐색 방법 <a class="header-anchor" href="#탐색-방법" aria-label="Permalink to &quot;탐색 방법&quot;">​</a></h2><p>배열의 중앙에 있는 값을 조사하여 찾고자 하는 항목이 왼쪽 도는 오른쪽 부분 배열에 있는지를 알아내어 탐색의 범위를 반으로 줄인다.</p><p><img src="'+t+'" alt="탐색"> <img src="'+l+`" alt="탐색"></p><h2 id="조건" tabindex="-1">조건 <a class="header-anchor" href="#조건" aria-label="Permalink to &quot;조건&quot;">​</a></h2><p><strong>이진 탐색은 기본적으로 배열이 정렬되어있음을 원칙으로한다.</strong></p><p>이진탐색을 구현할 땐 정렬된 배열의 중앙 인덱스의 값이 <strong>어떤 값</strong>과 <strong>어떻게</strong> 비교할 것인가가 중요하다. 이것은 주어진 문제에따라 달라지기때문에 문제를 읽고 이해한뒤에 <code>left</code>와 <code>right</code>가 어디로 향할 것인가를 먼저 생각하고 구현하는 것이 중요하다.</p><h2 id="코드" tabindex="-1">코드 <a class="header-anchor" href="#코드" aria-label="Permalink to &quot;코드&quot;">​</a></h2><p>1~10이 들어있는 배열에서 target을 찾는 로직이다.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">binarySearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> binarySearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [left, right] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (arr[mid] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target) left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;left :: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, left, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;, arr[left] :: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, arr[left])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;right :: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, right, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;, arr[right] :: &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, arr[right])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// left ::  6 , arr[left] ::  7</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// right ::  6 , arr[right] ::  7</span></span></code></pre></div>`,12)]))}const o=i(k,[["render",p]]);export{F as __pageData,o as default};
