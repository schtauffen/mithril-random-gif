import {
  DEBUG_LOG
} from "../actions"

export const debug = (state = [], action) => {
  switch (action.type) {
    case DEBUG_LOG:
      const args = action.args
      console.log("DEBUG:", ...args)
      return args
  }
  return state
}
