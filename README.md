# @unction/thenP


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, B> => Promise<A> => Promise<D | B>

A port of the `Promise.prototype.then()` function.

Credit: @keithamus

``` javascript
thenP(
  ([user, project]) => console.log(user, project)
)(Promise.all([fetchUser, fetchProject]))
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/thenP.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/thenP.svg?maxAge=2592000&style=flat-square
