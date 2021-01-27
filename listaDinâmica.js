class List {
    constructor() {
        this.vetorList = []
    }

    addFirstElement() {
        for (let i in arguments) {
            this.vetorList.unshift(arguments[i])
        }
    }

    addFinalElement() {
        for (let i in arguments) {
            this.vetorList.push(arguments[i])
        }
    }

    removeFirstElement() {
        return console.log(this.vetorList.shift())
    }

    removeFinalElement() {
        return console.log(this.vetorList.pop())
    }

    printList() {
        return console.log(this.vetorList)
    }
}

l1 = new List

l1.addFinalElement(4, 5)
l1.addFirstElement(3, 2, 1)
l1.addFinalElement(6, 7, 8, 9)
l1.addFinalElement(10)

l1.printList()

l1.removeFinalElement()
l1.removeFirstElement()

l1.printList()