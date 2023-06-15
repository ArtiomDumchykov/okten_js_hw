function emptyDataError(message, element) {
    console.log(message)

    switch (message) {
        case "empty data": 
            insertContentToElement(element, message)
            break;
            
        default:
            console.log(message) 
            return message
    }
}