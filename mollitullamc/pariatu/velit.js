function setContentRangeHeader(start, end, totalLength) {
  return `bytes ${start}-${end}/${totalLength}`;
}

// Usage
const startByte = 0;
const endByte = 1023; // For example, the end byte of the range
const totalByteLength = 50000; // Total size of the file

const contentRangeHeader = setContentRangeHeader(startByte, endByte, totalByteLength);
console.log(contentRangeHeader); // Outputs: bytes 0-1023/50000
