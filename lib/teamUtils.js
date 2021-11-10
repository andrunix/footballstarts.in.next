
const normalizeName = (name, withDashes = true) => {
    // Get rid of parenthes, ampersands, single-quotes, and spaces
    let normalized = '';
    normalized = name.replace(/[\(\)']/g, '').replace(/[\s&]/g, withDashes ? '-' : '').toLowerCase();
    normalized = normalized.replace(/é/g, 'e');
    return normalized;
};


const camelCase = (str) => {
    const bits = str.split('-');
    const first = bits.shift();
    const upper = bits.map(b => b[0].toUpperCase() + b.slice(1));
    return [first, upper].flat().join('');
};


export {
    normalizeName,
    camelCase
};

