---
title: 素数检测算法
description: >
  介绍几种素数检测算法
layout: post
---



categories: Algorithm

素数检测算法

本文首先介绍几种素数检测算法, 最后构造一种无穷流, 将输入看作一种无穷流, 筛选出第n个素数。

#试除法
尝试从2到$\sqrt{n}$的整数是否整除N, 这是最简单粗暴的一种方式, 地球人都会,在此不讨论.

#筛选法
为了找出小于n的所有素数,构造一个由2到n组成的数组.2是第一个素数, 为了找出2以外的素数,就要从其余的整数中过滤掉2所有的倍数,这样就留下了
一个从3开始的数组。由于3没有被小于它的任何素数整除，因此3就是下一个素数,依次类推,就可以求出所有小于等于n的所有素数.以下是js代码示例.

```
var prime = function(n) {
	var primes = [];
	for (var i = 2; i < n + 1; i++) {
		primes[i] = 1;
	}
	var multi = 1;
	var i = 2;
	for (i = 2; i <=n ;i++) {
		multi = 2;
		if (primes[i] != 1) {
			continue;
		}
		while (i * multi <= n) {
			primes[i * multi] = 0;
			multi++;
		}
	}
	var ret = [];
	for (i = 2; i < n + 1; i++) {
		if (primes[i] === 1) {
			ret.push(i);
		}
	}
	return ret;
}
```

未完待续...