module.exports = {
  isValidAddress: function (address) {
    // TODO: IMPLEMENT REAL VALIDATION FOR FILECOIN ADDRESSES
    return address && address.startsWith('f');
  }
}
