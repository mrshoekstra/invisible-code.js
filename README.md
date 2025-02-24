# Invisible Code JS <picture><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f7df1e"></picture> <picture><img alt="Security" src="https://img.shields.io/badge/Security-222222"></picture>

## Introduction
This is security proof of concept for invisible JavaScript code.

> [!CAUTION]
> **Disclaimer**: This project is provided for educational and legitimate purposes only. It must not be used for any malicious, illegal, or unethical activities. The user assumes full responsibility for compliance with all applicable laws and regulations. The author disclaims any liability for misuse.

## Index
- [Function](#function)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Support](#support)

## Function
How does it work?
1. The code is designed to accept Unicode characters as input;
2. The input is converted into an 8-bit string;
3. The 8-bit string is transformed into a binary string;
4. The binary string (ones and zeros) is mapped as follows:
   - **0 (zero)**: U+200C ZERO WIDTH NON-JOINER
   - **1 (one)**: U+200D ZERO WIDTH JOINER
5. This forms the invisible code.

## Usage
### Build
1. Copy the code from **[`encode-build.js`](/src/encode-build.js)**;
2. Enter JavaScript code between the single quotes of the `input` variable;\
```const input = '🔴';```
3. Run the code inside a console window;
4. Copy the `console.log()` response;
5. This is the script that runs your hidden code.

### Encode
1. Copy the code from **[`encode.js`](/src/encode.js)**;
2. Enter JavaScript code between the single quotes of the `input` variable;\
```const input = '🔴';```
3. Run the code inside a console window;
4. Copy the `console.log()` response for the decode script, including the single quotes.

### Decode
1. Copy the code from **[`decode-append.js`](/src/decode-append.js)** or **[`decode-eval.js`](/src/decode-eval.js)**;
2. Replace the value of the `a` variable, including the single quotes, with the response from the [encode](#encode) script;\
```a='🔴';```
3. Run the code.

## Features
A few examples can be found in the [`/src`](/src) folder:
- **[`decode-append.js`](/src/decode-append.js)**: Decodes the invisible code and appends it to the DOM;
- **[`decode-eval.js`](/src/decode-eval.js)**: Decodes the invisible code and evaluates/executes it after decoding;
- **[`encode.js`](/src/encode.js)**: Encodes the string in the `input` variable and outputs the result using `console.log()`;
- **[`encode-build.js`](/src/encode-build.js)**: Encodes the string in the `input` variable and returns the decode script that includes the encoded text, outputting it using `console.log()`.

## License
Code released under the [MIT license](LICENSE.md).

## Support
If you found this code helpful, please consider making a donation or become a sponsor to support my work. Even a small donation can make a big difference! ❤️
