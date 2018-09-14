pragma solidity ^0.4.24;

//ERC20 function interface
interface ERC20_Interface {
  function totalSupply() external view returns (uint);
  function balanceOf(address _owner) external view returns (uint);
  function transfer(address _to, uint _amount) external returns (bool);
  function transferFrom(address _from, address _to, uint _amount) external returns (bool);
  function approve(address _spender, uint _amount) external returns (bool);
  function allowance(address _owner, address _spender) external view returns (uint);
}
