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
1. Copy the code from **[`build.js`](/src/build.js)**;
2. Put JavaScript code as a string in the first variable;
3. Run the code;
4. Copy the `console.log()` response;\
This is the script that runs your hidden code.

### Encode
1. Copy the code from **[`encode.js`](/src/encode.js)**;
2. Put JavaScript code as a string in the first variable;
3. Run the code;
4. Copy the `console.log()` response;\
This is your input for the decode script, including the single quotes.

### Decode
1. Copy the code from **[`decode.js`](/src/decode.js)**;
2. Replace the value of the first variable, with the response from the [encode](#encode) script, including the single quotes.;
3. Run the code.

## Features
A few examples can be found in the [`/src`](/src) folder:
- **[`build.js`](/src/build.js)**: Encodes the code string to invisible code and returns a script that decodes the invisible code and runs it;
- **[`decode.js`](/src/decode.js)**: Decodes the invisible code to a code string;
- **[`encode.js`](/src/encode.js)**: Encodes the code string to invisible code.

## License
Code released under the [MIT license](LICENSE.md).

## Support
If you found this code helpful, please consider making a donation or become a sponsor to support my work. Even a small donation can make a big difference! ❤️
