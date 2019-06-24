// The entry file of your WebAssembly module

/** Calculates the factorial of one number */
export function factorial (n: i32): i32 {
  if (n === 0) {
    return 1
  }

  return n * factorial(n - 1)
}
