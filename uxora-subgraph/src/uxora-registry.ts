import {
  WireframeCreated as WireframeCreatedEvent,
  WireframeUpdated as WireframeUpdatedEvent
} from "../generated/UxoraRegistry/UxoraRegistry"
import { Wireframe } from "../generated/schema"

export function handleWireframeCreated(event: WireframeCreatedEvent): void {
  let id = event.params.wireframeId.toHexString()
  let entity = new Wireframe(id)
  
  entity.wireframeId = id
  entity.name = event.params.name
  entity.ipfsHash = event.params.ipfsHash
  entity.creator = event.params.creator
  entity.createdAt = event.params.createdAt
  entity.updatedAt = event.params.createdAt
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWireframeUpdated(event: WireframeUpdatedEvent): void {
  let id = event.params.wireframeId.toHexString()
  let entity = Wireframe.load(id)

  if (entity != null) {
    entity.ipfsHash = event.params.newIpfsHash
    entity.updatedAt = event.params.updatedAt
    entity.save()
  }
}
