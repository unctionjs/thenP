import {MapperFunctionType} from "./types";

export default function thenP<A, B, D> (resolution: MapperFunctionType<A, B>) {
  return function thenPResolution (promise: Promise<A>): Promise<D | B> {
    return promise.then(resolution);
  };
}
