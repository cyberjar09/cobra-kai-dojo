interface ItemRule {
    item: string;
    unitPrice: number;
    specialPrice?: {
        pricingSchema: string
        x: number
        y: number
    };
}

export class Checkout {
    rules: ItemRule[];

    constructor(rules: ItemRule[]){
        this.rules = rules;
    }

    scan(items:string): number {
        const hash: Record<string, number> = {};
        items.split('').forEach(value => {
            if (hash[value]) {
                hash[value] += 1
            } else {
                hash[value] = 1
            }
        });
        let total = 0
        for (const [item, quantity] of Object.entries(hash)) {
            const itemRule = this.rules.find((r) => r.item === item)
            
            if (itemRule.specialPrice?.pricingSchema === 'X-items-for-$Y') {
                let q = quantity
                while(q > 0) {
                    if (itemRule.specialPrice && q >= itemRule.specialPrice.x) {
                        q -= itemRule.specialPrice.x
                        total += itemRule.specialPrice.y
                    } else {
                        total += itemRule.unitPrice * q
                        q = 0
                    }
                }
            } else if (itemRule.specialPrice?.pricingSchema === 'buy-X-get-Y-forfree') {
                if (quantity > itemRule.specialPrice.x) {
                    total += (itemRule.unitPrice * quantity) - itemRule.unitPrice
                } else {
                    total += itemRule.unitPrice * quantity
                }
            }

        }
        return total
    }
}