// DEPRECATE
// function emptyDataError(message, element) {
//     console.log(message)

//     switch (message) {
//         case "empty data": 
//             insertContentToElement(element, message)
//             break;
//         case "404": 
//             insertContentToElement(element, message)
//             break;
            
//         default:
//             console.log(message) 
//             return message
//     }
// }

class ErrorHandlingStrategy {

    constructor() {
        if (new.target == ErrorHandlingStrategy) {
            throw new Error("ErrorHandlingStrategy cannot be directly instantiated ")
        }
    }

    handle(message, element) {
      console.log(message);
      insertContentToElement(element, message);
    }
}


class EmptyDataErrorStrategy extends ErrorHandlingStrategy {
    constructor() {
        super()
        if (typeof EmptyDataErrorStrategy.instance === "object") {
            return Sun.instance;
        }

        EmptyDataErrorStrategy.instance = this
    }

    handle(element = getElement(".empty-data"), message = "empty data") {
      super.handle(message, element);
    }
}


class NotFoundErrorStrategy extends ErrorHandlingStrategy {

    constructor() {
        super()
        if (typeof NotFoundErrorStrategy.instance === "object") {
            return Sun.instance;
        }

        NotFoundErrorStrategy.instance = this
    }

  handle(element = getElement(".error-not-found__title"), message = "404") {
    super.handle(message, element);
  }
}

const errorStrategies = {
    "empty data": new EmptyDataErrorStrategy().handle,
    "404": new NotFoundErrorStrategy().handle,
};


