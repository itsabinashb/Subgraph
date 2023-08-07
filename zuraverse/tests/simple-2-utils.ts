import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { ReturnedCount } from "../generated/Simple2/Simple2"

export function createReturnedCountEvent(count: BigInt): ReturnedCount {
  let returnedCountEvent = changetype<ReturnedCount>(newMockEvent())

  returnedCountEvent.parameters = new Array()

  returnedCountEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )

  return returnedCountEvent
}
