import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { ReturnedCount } from "../generated/schema"
import { ReturnedCount as ReturnedCountEvent } from "../generated/Simple2/Simple2"
import { handleReturnedCount } from "../src/simple-2"
import { createReturnedCountEvent } from "./simple-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let count = BigInt.fromI32(234)
    let newReturnedCountEvent = createReturnedCountEvent(count)
    handleReturnedCount(newReturnedCountEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ReturnedCount created and stored", () => {
    assert.entityCount("ReturnedCount", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ReturnedCount",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "count",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
