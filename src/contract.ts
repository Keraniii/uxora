export const CONTRACT_ADDRESS = "0x179c626345D86F0809131F61ABA0fC00D57442F6" as const;

export const CONTRACT_ABI = [
  {
    type: "function",
    name: "saveWireframe",
    stateMutability: "nonpayable",
    inputs: [
      { name: "_title", type: "string" },
      { name: "_cid", type: "string" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "getMyWireframes",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        components: [
          { name: "title", type: "string" },
          { name: "cid", type: "string" },
          { name: "timestamp", type: "uint256" },
          { name: "author", type: "address" },
        ],
        type: "tuple[]",
      },
    ],
  },
  {
    type: "function",
    name: "getWireframesByAuthor",
    stateMutability: "view",
    inputs: [{ name: "_author", type: "address" }],
    outputs: [
      {
        components: [
          { name: "title", type: "string" },
          { name: "cid", type: "string" },
          { name: "timestamp", type: "uint256" },
          { name: "author", type: "address" },
        ],
        type: "tuple[]",
      },
    ],
  },
] as const;