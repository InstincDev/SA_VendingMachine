/* const items = [
    { itemName: "Sour Patch Kids", itemCode: "A01", itemAmount: 1.0 },
    { itemName: "Skittles", itemCode: "A02", itemAmount: 0.25 },
    { itemName: "Twizzlers", itemCode: "A03", itemAmount: 1.25 },
]; */

class VendingMachine {
    constructor(items) {
        this.items = {};

        for (const item of items) {
            
            this.items[item.itemCode] = { ...item };
            
        }
    }

    vend(code, amount) {
        let snack = this.items[code];
        
        // If no funds are given
        if (amount === undefined) {
            throw new Error("Not enough money");
        }

        if (snack === undefined) {
            throw new Error("Invalid Code");
        }

        if (amount < snack.itemAmount) {
            throw new Error("Not enough money")
        }

        if (amount > snack.itemAmount) {
            let change = amount - snack.itemAmount;
            return `${snack.itemName} and ${change.toFixed(2)}`;
        } else {
            return snack.itemName;
        }
    }
}

module.exports = VendingMachine;
