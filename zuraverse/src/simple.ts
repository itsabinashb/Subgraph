import {
  GotNum as GotNumEvent,
  QueryTime as QueryTimeEvent
} from "../generated/Simple/Simple"
import {  QueryTime } from "../generated/schema"

// export function handleGotNum(event: GotNumEvent): void {
//   let entity = new GotNum(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.Number = event.params.Number

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleQueryTime(event: QueryTimeEvent): void {
  let entity = new QueryTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
