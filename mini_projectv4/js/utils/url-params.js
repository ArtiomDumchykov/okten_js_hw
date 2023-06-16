// Поулчение url params по ключу key
class URLParams {
    constructor(location) {
        this.location = new URL(location)
    }

    getParam(key) {
        return this.location.searchParams.get(key)
    }
}