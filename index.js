export default function thenP(resolution) {
  return function thenPResolution(promise) {
    return promise.then(resolution);
  };
}
