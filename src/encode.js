// Define JavaScript code string to encode
const decodedCode = '';

// Convert the characters into a Uint8Array (UTF-8 encoded bytes)
const encodedBytes = new TextEncoder().encode(decodedCode);

// Convert each byte into an 8-bit binary string
const binaryString = encodedBytes
	// For each byte
	.reduce((bytes, byte) => {
		// Add every converted byte into an array
		bytes.push(
			byte
				// Convert byte to binary
				.toString(2)
				// Pad with leading zeros to ensure 8-bit representation
				.padStart(8, 0)
		);
		return bytes;
	}, [])
	// Merge array into a string
	.join('');

// Create a hidden string by replacing ones and zeros
const encodedString = binaryString
	// Replace '0' with U+200C ZERO WIDTH NON-JOINER
	.replace(/0/g, '‌')
	// Replace '1' with U+200D ZERO WIDTH JOINER
	.replace(/1/g, '‍');

// Log the hidden string to the console
console.log(`'${encodedString}'`);
