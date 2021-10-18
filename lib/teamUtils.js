
const normalizeName = (name, withDashes = true) => {
    // Get rid of parenthes, ampersands, single-quotes, and spaces
    let normalized = '';
    normalized = name.replace(/[\(\)']/g, '').replace(/[\s&]/g, withDashes ? '-' : '').toLowerCase();
    normalized = normalized.replace(/é/g, 'e');
    return normalized;
};

export {
    normalizeName
};

