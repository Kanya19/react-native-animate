import * as Attention from './attentionSeekers'
import * as BackEntrances from './backEntrances'
import * as BackExits from './backExits'
import {ANIMATE_ID} from './constants'
const ANIMATE_COMPONENTS = {
  ...Attention,
  ...BackEntrances,
  ...BackExits,
}
const COMPONENT = {}

Object.values(ANIMATE_ID).map((val) => {
  COMPONENT[val] = ANIMATE_COMPONENTS[val]
})

export const ANIMATE_NAMES_TO_COMPONENT = COMPONENT
