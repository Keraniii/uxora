import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { WireframeCreated } from "../generated/schema"
import { WireframeCreated as WireframeCreatedEvent } from "../generated/UxoraRegistry/UxoraRegistry"
import { handleWireframeCreated } from "../src/uxora-registry"
import { createWireframeCreatedEvent } from "./uxora-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let wireframeId = "Example string value"
    let name = "Example string value"
    let ipfsHash = "Example string value"
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let createdAt = BigInt.fromI32(234)
    let newWireframeCreatedEvent = createWireframeCreatedEvent(
      wireframeId,
      name,
      ipfsHash,
      creator,
      createdAt
    )
    handleWireframeCreated(newWireframeCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("WireframeCreated created and stored", () => {
    assert.entityCount("WireframeCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "WireframeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "wireframeId",
      "Example string value"
    )
    assert.fieldEquals(
      "WireframeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "WireframeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsHash",
      "Example string value"
    )
    assert.fieldEquals(
      "WireframeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "WireframeCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "createdAt",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
