export const DEBUG_LOG = "DEBUG_LOG"
export function debug (...args) {
  return {
    type: DEBUG_LOG,
    args
  }
}
