// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const checkGamerTag = (label) => {
    if (label.length < 8) {
        return false;
    }
    return true;
};

module.exports = {
    isEmpty,
    checkGamerTag,
};
