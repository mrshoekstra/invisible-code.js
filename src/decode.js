// Define an encoded string using invisible characters
const encodedString = '';

// Create a binary string by replacing the Unicode characters
const binaryString = encodedString
	// Replace U+200C ZERO WIDTH NON-JOINER with '0'
	.replace(/‌/g, 0)
	// Replace U+200D ZERO WIDTH JOINER with '1'
	.replace(/‍/g, 1);

// Split the binary string into 8-bit chunks (1 byte each)
const byteStrings = binaryString.match(/.{1,8}/g);

// Convert each 8-bit binary chunk into an integer
const byteArray = byteStrings.map((byte) => parseInt(byte, 2));

// Create an unsigned int(8) array from the byte array
const uint8Array = new Uint8Array(byteArray).buffer;

// Decode the byte array into a string
const decodedCode = new TextDecoder().decode(uint8Array);

// Log the decoded code in the console
console.log(decodedCode);
