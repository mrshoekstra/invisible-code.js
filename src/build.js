const decodedCode = '';
const encodedString = new TextEncoder()
	.encode(decodedCode)
	.reduce((string, byte) => string + byte.toString(2).padStart(8, 0), '')
	.replace(/0/g, '‌')
	.replace(/1/g, '‍');
const outputCode = `
	document.body.appendChild(
		Object.assign(
			document.createElement('script'),
			{
				src: URL.createObjectURL(
					new Blob(
						[
							new TextDecoder().decode(
								new Uint8Array(
									'${encodedString}'
										.replace(/‌/g, 0)
										.replace(/‍/g, 1)
										.match(/.{1,8}/g)
										.map(
											b => parseInt(b, 2)
										)
								).buffer
							)
						],
						{
							type: 'application/javascript'
						}
					)
				)
			}
		)
	);
`.replace(/(?<!new)\s+/g, '');
