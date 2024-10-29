# SASmprint2code

## Introduction

SASmprint2code is a tool designed to extract executable SAS code from MPRINT logs.

## Features

- Paste the complete log from the clipboard into the text box.
- Automatically extract and display executable SAS code.

## Usage

1. Copy all of your SAS log to the clipboard.
2. Open the home page.
3. Paste the log into the left text box.
4. The executable code will automatically appear on the right text box.
5. Example:
   - Log content:
     ```
     MPRINT(MACRO_NAME):   data test;
     MPRINT(MACRO_NAME):   set sashelp.class;
     MPRINT(MACRO_NAME):   run;
     ```
   - Extracted code:
     ```
     data test;
     set sashelp.class;
     run;
     ```

## License

This project is licensed under the [MIT License](LICENSE.md).

## Author

Chengeng Tian

For any questions, please contact zzzzqqq@gmail.com.
