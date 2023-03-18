// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Mintime is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("mintime", "MIN") {}

    function mint(address recipient, string memory tokenURI) external returns(uint256) {
        uint newTokenId = _tokenIds.current();
        _mint(recipient, newTokenId);
        _tokenIds.increment();
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }
}
