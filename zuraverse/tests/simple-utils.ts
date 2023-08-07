import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { GotNum, QueryTime } from "../generated/Simple/Simple"

export function createGotNumEvent(Number: BigInt): GotNum {
  let gotNumEvent = changetype<GotNum>(newMockEvent())

  gotNumEvent.parameters = new Array()

  gotNumEvent.parameters.push(
    new ethereum.EventParam("Number", ethereum.Value.fromUnsignedBigInt(Number))
  )

  return gotNumEvent
}

export function createQueryTimeEvent(param0: BigInt): QueryTime {
  let queryTimeEvent = changetype<QueryTime>(newMockEvent())

  queryTimeEvent.parameters = new Array()

  queryTimeEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return queryTimeEvent
}
