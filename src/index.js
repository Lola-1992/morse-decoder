const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = expr.split( '**********' ).map((text) => {
        const symbol = text.length / 10;
        let code = '';

        for (let i = 0; i < symbol; i++) {
            let finish = '';
            for (let j = i * 10; j < i * 10 + 10; j += 2) {
                if (text[j] + text[j + 1] === '10') {
                    finish += '.';
                } else if (text [j] + text [j + 1] === '11') {
                    finish += '-';
                }
            }

            code += MORSE_TABLE[finish];
            finish = '';
        }
        return code;
    }).join(' ');

    return result;
}

module.exports = {
    decode
}
