

export const inputs = (keys: string[], values: (string | number)[]) => {
    let count = 0;
    for(let entery of values){
        if(!entery){
            return `Please enter an input for ${keys[count]}`
        }
        count++
    }
}



export const titleCase = (word: string | string[]) => {
    let desiredString = "";
    if(typeof(word) === "string"){
        const trimmedWord = word.trim();
        
        let ww = trimmedWord[0].toUpperCase()
        let charIndex = 0;
        for(let char of trimmedWord.substring(1)){
            if(char === " "){
                ww.concat(char, trimmedWord[charIndex+1].toUpperCase());
                charIndex += 2;
            }else{
                // console.log("\n\t desired-string ww: ", char, trimmedWord[charIndex], ww)
                ww += char;
                charIndex++;
            }
        };
        desiredString += ww;
    };
    return desiredString
}


export const pascalCaseSeparator = (word: string) => {
    const titleCasedWord = titleCase(word);
    // console.log("\n\t Word: ", word, titleCasedWord)
    let requiredWord = "";
    let count = 0;
    for(let char of titleCasedWord){
        if(count !== 0){
            // console.log("\n\t char: ", char)
            if(char === char.toUpperCase()){
                requiredWord += " " + char;
            }else{
                requiredWord += char;
            }
        }else{
            requiredWord += char.toUpperCase()
        }
        count ++
    }
    // console.log("\n\t requiredWord: ", requiredWord)
    return requiredWord;
}