import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  WireframeCreated,
  WireframeUpdated
} from "../generated/UxoraRegistry/UxoraRegistry"

export function createWireframeCreatedEvent(
  wireframeId: string,
  name: string,
  ipfsHash: string,
  creator: Address,
  createdAt: BigInt
): WireframeCreated {
  let wireframeCreatedEvent = changetype<WireframeCreated>(newMockEvent())

  wireframeCreatedEvent.parameters = new Array()

  wireframeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "wireframeId",
      ethereum.Value.fromString(wireframeId)
    )
  )
  wireframeCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  wireframeCreatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  wireframeCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  wireframeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createdAt",
      ethereum.Value.fromUnsignedBigInt(createdAt)
    )
  )

  return wireframeCreatedEvent
}

export function createWireframeUpdatedEvent(
  wireframeId: string,
  newIpfsHash: string,
  updatedAt: BigInt
): WireframeUpdated {
  let wireframeUpdatedEvent = changetype<WireframeUpdated>(newMockEvent())

  wireframeUpdatedEvent.parameters = new Array()

  wireframeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "wireframeId",
      ethereum.Value.fromString(wireframeId)
    )
  )
  wireframeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newIpfsHash",
      ethereum.Value.fromString(newIpfsHash)
    )
  )
  wireframeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "updatedAt",
      ethereum.Value.fromUnsignedBigInt(updatedAt)
    )
  )

  return wireframeUpdatedEvent
}
