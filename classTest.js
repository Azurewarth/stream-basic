

class Test {
    constructor(option) {
        this.code = option.code
        this.next = option.next
    }

    _sayHi(next = this.next) {
        next()
    }

    toSay() {
        this._sayHi()
    }
}

const test = new Test({
    code: 1,
    next: function() {
        console.log(1111111111)
    }
})

test.toSay()