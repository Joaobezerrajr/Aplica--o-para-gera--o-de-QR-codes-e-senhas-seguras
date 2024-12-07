async function permittedCharacters() {
    let permitted = [];

    if(process.env.UPPERCASE_LETTERS === "true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ") // os três pontos são spread operator, ele é utilizado para adicionar e não substituir que há dentro do array
    }

    if(process.env.LOWERCASE_LETTERS === "true") {
        permitted.push( ... "abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === "true") {
        permitted.push( ...'0123456789')
    }

    if(process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push( ..."!@#$%^&*()-_")
    }
    
    return permitted;
}

export default permittedCharacters;