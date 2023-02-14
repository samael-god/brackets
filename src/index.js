module.exports = function check(str, bracketsConfig) {
    let mapConfig = {};
    let stack = [];
    let openedBrackets = [];
    bracketsConfig.forEach(item => {
        mapConfig[item[1]] = item[0];
        openedBrackets.push(item[0]);
    })
    for (let i = 0; i < str.length; i++) {
        if (openedBrackets.includes(str[i]) && str[i] !== stack.at(-1)) {
            stack.push(str[i]);
            continue
        }
        if (mapConfig[str[i]] === stack.at(-1)) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    return stack.length === 0;
}



