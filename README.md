# Invisible Code JS <picture><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f7df1e"></picture> <picture><img alt="Security" src="https://img.shields.io/badge/Security-222222"></picture>

## Introduction
Invisible Code JS is a security-focused proof of concept that allows JavaScript code to be hidden using zero-width Unicode characters. By encoding code into an invisible format, it becomes undetectable to the naked eye while remaining fully functional when executed.

> [!CAUTION]
> **Disclaimer**: This project is intended for educational and ethical research purposes only. Any misuse for malicious, illegal, or unethical activities is strictly prohibited. Users assume full responsibility for compliance with all applicable laws and regulations. The author is not liable for any misuse.

## Index
- [Function](#function)
  - [Process](#process)
  - [Features](#features)
- [Usage](#usage)
  - [Build](#build)
  - [Encode](#encode)
  - [Decode](#decode)
- [License](#license)
- [Support](#support)

## Function
### Process
1. The code is designed to accept Unicode characters as input;
2. The input is converted into an 8-bit string;
3. The 8-bit string is transformed into a binary string;
4. The binary string (ones and zeros) is mapped as follows:
   - **0 (zero)**: U+200C ZERO WIDTH NON-JOINER
   - **1 (one)**: U+200D ZERO WIDTH JOINER
5. This forms the invisible code.

### Features
A few files can be found in the [`/src`](/src) folder:
- **[`build.js`](/src/build.js)**: Encodes the code string to invisible code and returns a script that decodes the invisible code and runs it;
- **[`decode.js`](/src/decode.js)**: Decodes the invisible code to a code string;
- **[`encode.js`](/src/encode.js)**: Encodes the code string to invisible code.

## Usage
### Build
📥 **Input**: String containing invisible code.  
📤 **Output**: String containing JavaScript code that decodes and runs the invisible code.
1. Copy the code from **[`build.js`](/src/build.js)**;
2. Assign JavaScript code as a string to the first variable;
3. Run the code.

### Encode
📥 **Input**: String containing JavaScript code.  
📤 **Output**: String containing invisible code, enclosed in single quotes.
1. Copy the code from **[`encode.js`](/src/encode.js)**;
2. Assign JavaScript code as a string value to the first variable;
3. Run the code.

> [!TIP]
> Copy the script's output (invisible code enclosed in single quotes) and use as input for the [decode](#decode) script.

### Decode
📥 **Input**: String containing invisible code.  
📤 **Output**: String containing the original encoded JavaScript code.
1. Copy the code from **[`decode.js`](/src/decode.js)**;
2. Replace the value of the first variable, with the output from the [encode](#encode) script;
3. Run the code.

> [!TIP]
> Ensure you don't miss any invisible code when copying by copying the full output from the [encode](#encode) script, including the single quotes. Then, replace the single quotes defining the first variable value in the decode script.

## License
Code released under the [MIT license](LICENSE.md).

## Support
If you found this code helpful, please consider making a donation or become a sponsor to support my work. Even a small donation can make a big difference! ❤️
