const VendingMachine = require("./vendingMachine");
/* 
Vending Machine - Candy
in --> code
out --> "itemName"

User Stories
* No Money - "Not enough money"
* Not enough funds - "Not enough money"
* Wrong Code - "Invalid Code"
* Change - "itemName and itemChange"
*/

describe("Vending Machine Unsuccessful Purchases", () => {
    let vendingMachine;

    beforeEach(() => {
        const items = [
            { itemName: "Sour Patch Kids", itemCode: "A01", itemAmount: 1.0 },
            { itemName: "Skittles", itemCode: "A02", itemAmount: 0.25 },
            { itemName: "Twizzlers", itemCode: "A03", itemAmount: 1.25 },
        ];

        vendingMachine = new VendingMachine(items);
    });

    test("should Throw Error('Not enough money') if no funds are given", () => {
        expect(() => vendingMachine.vend("A01")).toThrowError(
            "Not enough money"
        );
    });

    test("should Throw Error('Not enough money') if incorrect funds are given", () => {
        expect(() => vendingMachine.vend("A02")).toThrowError(
            "Not enough money"
        );
    });

    test("should Throw Error('Invalid Code') if wrong code is given", () => {
        expect(() => vendingMachine.vend("B02", 1.0)).toThrowError(
            "Invalid Code"
        );
    });
});

describe("Vending Machine Successful Purchases", () => {
    let vendingMachine;
    
    beforeEach(() => {
        const items = [
            { itemName: "Sour Patch Kids", itemCode: "A01", itemAmount: 1.0 },
            { itemName: "Skittles", itemCode: "A02", itemAmount: 0.25 },
            { itemName: "Twizzlers", itemCode: "A03", itemAmount: 1.25 },
        ];

        vendingMachine = new VendingMachine(items);
    });

    test("should return itemName if correct funds are given", () => {
        const vended = vendingMachine.vend("A03", 1.25);
        expect(vended).toBe("Twizzlers");
    });

    test("should return itemName and change amount when too much money is given", () => {
        const vended = vendingMachine.vend("A01", 1.25);
        expect(vended).toBe("Sour Patch Kids and 0.25");
    });
});
