import { ReturnedCount as ReturnedCountEvent } from "../generated/Simple2/Simple2"
import { ReturnedCount } from "../generated/schema"

export function handleReturnedCount(event: ReturnedCountEvent): void {
  let entity = new ReturnedCount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
