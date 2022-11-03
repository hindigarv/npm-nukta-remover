const removeNukta = function (str) {
    return str.replace('क़', 'क')
        .replace('ख़', 'ख')
        .replace('ग़', 'ग')
        .replace('ज़', 'ज')
        .replace('ड़', 'ड')
        .replace('ढ़', 'ढ')
        .replace('फ़', 'फ')
        .replace("़", "");
};

export default removeNukta;
