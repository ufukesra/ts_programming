 class Item {
        private itemName!: string;
        private itemPrice!: number;
    
        //create constructor
        constructor(name: string, price: number) {
            this.itemName = name;
            this.itemPrice = price;
        }   
        // Getter for itemName
        public getItemName(): string {
            return this.itemName;
        }
    
        // Setter for itemName
        public setItemName(name: string): void {
            this.itemName = name;
        }
    
        // Getter for itemPrice
        public getItemPrice(): number {
            return this.itemPrice;
        }
    
        // Setter for itemPrice
        public setItemPrice(price: number): void {
           if(price<=0){
            throw new Error("Item price should be greater than zero.");
           }
            this.itemPrice = price;
        }
    }

    let item1= new Item("Pen",2);
    console.log(item1);

    item1.setItemPrice(1);
    console.log(item1);