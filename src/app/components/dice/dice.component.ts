import { Component, OnInit } from '@angular/core';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {
    caretUp = faCaretUp;
    caretDown = faCaretDown;
    public d20Count = 1;
    public d16Count = 1;
    public d12Count = 1;
    public d10Count = 1;
    public d8Count = 1;
    public d6Count = 1;
    public d4Count = 1;

    constructor() { }

    ngOnInit() { }

    public roll(die: number, numberOfDice: number): number[] {
        let rollResult = [];
        for (let i = 0; i < numberOfDice; i += 1) {
            rollResult.push(Math.floor(Math.random() * die) + 1);
        }
        return rollResult;
    }

    public increment(property: string) {
        if (this.hasOwnProperty(property) && typeof this[property] === 'number')
            this[property] += 1;
        else
            throw new Error(`Could not increment property: ${property}`);
    }

    public decrement(property: string) {
        if (this.hasOwnProperty(property) && typeof this[property] === 'number') {
            if (this[property] > 1)
                this[property] -= 1;
        } else {
            throw new Error(`Could not decrement property: ${property}`);
        }
    }
}