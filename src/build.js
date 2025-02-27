// Define JavaScript code string to encode
const decodedCode = '';

// Create a hidden string by replacing ones and zeros
const encodedString = new TextEncoder()
	// Convert the characters into a Uint8Array (UTF-8 encoded bytes)
	.encode(decodedCode)
	// Convert each byte into an 8-bit binary string using reduce
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
	.join('')
	// Replace '0' with U+200C ZERO WIDTH NON-JOINER
	.replace(/0/g, '‌')
	// Replace '1' with U+200D ZERO WIDTH JOINER
	.replace(/1/g, '‍');

// Build the output code
const outputCode = `
	// Append to the HTML <head> section
	document.head.appendChild(
		// A newly created object
		Object.assign(
			// With the <script> HTML tag
			document.createElement('script'),
			{
				// Containing property 'src'
				src: URL.createObjectURL(
					// Pointing to a blob on the current (sub)domain
					new Blob(
						// Consisting of the decoded code string
						[
							new TextDecoder().decode(
								new Uint8Array(
									'${encodedString}'
										.replace(/‌/g, 0)
										.replace(/‍/g, 1)
										.match(/.{8}/g)
										.map((b) => parseInt(b, 2))
								).buffer
							)
						],
						// With the JavaScript file type
						{
							type: 'application/javascript'
						}
					)
				)
			}
		)
	);
`
	// Remove whitespace characters except directly after 'new' and everything behind two slashes
	.replace(/(?:(?<!new)\s+|\/\/.*$)/gm, '');

console.log(outputCode);
