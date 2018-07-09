export const Math = 
{
  "contractName": "Math",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582038620f41d45d0709e8ddaa39f69dc0e01ebb91f4cba2cff62e177da8da4049570029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582038620f41d45d0709e8ddaa39f69dc0e01ebb91f4cba2cff62e177da8da4049570029",
  "sourceMap": "83:429:57:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "83:429:57:-;;;;;;;;",
  "source": "pragma solidity ^0.4.23;\n\n\n/**\n * @title Math\n * @dev Assorted math operations\n */\nlibrary Math {\n  function max64(uint64 a, uint64 b) internal pure returns (uint64) {\n    return a >= b ? a : b;\n  }\n\n  function min64(uint64 a, uint64 b) internal pure returns (uint64) {\n    return a < b ? a : b;\n  }\n\n  function max256(uint256 a, uint256 b) internal pure returns (uint256) {\n    return a >= b ? a : b;\n  }\n\n  function min256(uint256 a, uint256 b) internal pure returns (uint256) {\n    return a < b ? a : b;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/Math.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/math/Math.sol",
    "exportedSymbols": {
      "Math": [
        5709
      ]
    },
    "id": 5710,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5640,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title Math\n@dev Assorted math operations",
        "fullyImplemented": true,
        "id": 5709,
        "linearizedBaseContracts": [
          5709
        ],
        "name": "Math",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 5656,
              "nodeType": "Block",
              "src": "166:32:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 5651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5649,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5642,
                        "src": "179:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5650,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5644,
                        "src": "184:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "179:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5653,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5644,
                      "src": "192:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 5654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "179:14:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5652,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5642,
                      "src": "188:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 5648,
                  "id": 5655,
                  "nodeType": "Return",
                  "src": "172:21:57"
                }
              ]
            },
            "documentation": null,
            "id": 5657,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max64",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5642,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "115:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5641,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "115:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5644,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "125:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5643,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "125:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "114:20:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "158:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5646,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "157:8:57"
            },
            "scope": 5709,
            "src": "100:98:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5673,
              "nodeType": "Block",
              "src": "268:31:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 5668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5666,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5659,
                        "src": "281:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5667,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5661,
                        "src": "285:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "281:5:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5670,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5661,
                      "src": "293:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 5671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "281:13:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5669,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5659,
                      "src": "289:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 5665,
                  "id": 5672,
                  "nodeType": "Return",
                  "src": "274:20:57"
                }
              ]
            },
            "documentation": null,
            "id": 5674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min64",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5659,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "217:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5658,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5661,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "227:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5660,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:20:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5664,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "260:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5663,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:8:57"
            },
            "scope": 5709,
            "src": "202:97:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5690,
              "nodeType": "Block",
              "src": "373:32:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5683,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5676,
                        "src": "386:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5684,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5678,
                        "src": "391:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "386:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5687,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5678,
                      "src": "399:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "386:14:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5686,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5676,
                      "src": "395:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5682,
                  "id": 5689,
                  "nodeType": "Return",
                  "src": "379:21:57"
                }
              ]
            },
            "documentation": null,
            "id": 5691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max256",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5676,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "319:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5678,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "330:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "318:22:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "364:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "363:9:57"
            },
            "scope": 5709,
            "src": "303:102:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5707,
              "nodeType": "Block",
              "src": "479:31:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5702,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5700,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5693,
                        "src": "492:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5701,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5695,
                        "src": "496:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "492:5:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5704,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5695,
                      "src": "504:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "492:13:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5703,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5693,
                      "src": "500:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5699,
                  "id": 5706,
                  "nodeType": "Return",
                  "src": "485:20:57"
                }
              ]
            },
            "documentation": null,
            "id": 5708,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min256",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5693,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "425:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5695,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "436:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "424:22:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5698,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "470:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:9:57"
            },
            "scope": 5709,
            "src": "409:101:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5710,
        "src": "83:429:57"
      }
    ],
    "src": "0:513:57"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/math/Math.sol",
    "exportedSymbols": {
      "Math": [
        5709
      ]
    },
    "id": 5710,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5640,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:57"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title Math\n@dev Assorted math operations",
        "fullyImplemented": true,
        "id": 5709,
        "linearizedBaseContracts": [
          5709
        ],
        "name": "Math",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 5656,
              "nodeType": "Block",
              "src": "166:32:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 5651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5649,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5642,
                        "src": "179:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5650,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5644,
                        "src": "184:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "179:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5653,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5644,
                      "src": "192:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 5654,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "179:14:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5652,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5642,
                      "src": "188:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 5648,
                  "id": 5655,
                  "nodeType": "Return",
                  "src": "172:21:57"
                }
              ]
            },
            "documentation": null,
            "id": 5657,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max64",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5645,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5642,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "115:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5641,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "115:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5644,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "125:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5643,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "125:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "114:20:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5648,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5647,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5657,
                  "src": "158:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5646,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "158:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "157:8:57"
            },
            "scope": 5709,
            "src": "100:98:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5673,
              "nodeType": "Block",
              "src": "268:31:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      },
                      "id": 5668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5666,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5659,
                        "src": "281:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5667,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5661,
                        "src": "285:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint64",
                          "typeString": "uint64"
                        }
                      },
                      "src": "281:5:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5670,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5661,
                      "src": "293:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "id": 5671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "281:13:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5669,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5659,
                      "src": "289:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "functionReturnParameters": 5665,
                  "id": 5672,
                  "nodeType": "Return",
                  "src": "274:20:57"
                }
              ]
            },
            "documentation": null,
            "id": 5674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min64",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5659,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "217:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5658,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "217:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5661,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "227:8:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5660,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "227:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "216:20:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5665,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5664,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5674,
                  "src": "260:6:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 5663,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "259:8:57"
            },
            "scope": 5709,
            "src": "202:97:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5690,
              "nodeType": "Block",
              "src": "373:32:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5683,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5676,
                        "src": "386:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">=",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5684,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5678,
                        "src": "391:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "386:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5687,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5678,
                      "src": "399:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "386:14:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5686,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5676,
                      "src": "395:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5682,
                  "id": 5689,
                  "nodeType": "Return",
                  "src": "379:21:57"
                }
              ]
            },
            "documentation": null,
            "id": 5691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "max256",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5676,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "319:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "319:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5678,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "330:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "318:22:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5681,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5691,
                  "src": "364:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "363:9:57"
            },
            "scope": 5709,
            "src": "303:102:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5707,
              "nodeType": "Block",
              "src": "479:31:57",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5702,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 5700,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5693,
                        "src": "492:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 5701,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5695,
                        "src": "496:1:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "492:5:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "argumentTypes": null,
                      "id": 5704,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5695,
                      "src": "504:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "492:13:57",
                    "trueExpression": {
                      "argumentTypes": null,
                      "id": 5703,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5693,
                      "src": "500:1:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5699,
                  "id": 5706,
                  "nodeType": "Return",
                  "src": "485:20:57"
                }
              ]
            },
            "documentation": null,
            "id": 5708,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "min256",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5696,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5693,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "425:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5695,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "436:9:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "436:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "424:22:57"
            },
            "payable": false,
            "returnParameters": {
              "id": 5699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5698,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5708,
                  "src": "470:7:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:7:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "469:9:57"
            },
            "scope": 5709,
            "src": "409:101:57",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5710,
        "src": "83:429:57"
      }
    ],
    "src": "0:513:57"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.212Z"
}