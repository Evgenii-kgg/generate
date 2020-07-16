
function Makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    const positionChar = (length) => Math.floor(Math.random() * length)
    for ( let i = 0; i < length; i++ ) {  
        if (i === (length - 1)) {
            const dobbleChar =  result.charAt(positionChar(i-1))
            const resultSplit = result.split('')
            resultSplit.splice(positionChar(i), 0 , dobbleChar)
            result = resultSplit.join('')
            
        } else result += characters.charAt(positionChar(charactersLength));
    }
    return result;
 }
