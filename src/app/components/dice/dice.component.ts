import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public roll(die: number, numberOfDice: number): number[] {
        let rollResult = [];
        for (let i = 0; i < numberOfDice; i += 1) {
            rollResult.push(Math.floor(Math.random() * die) + 1);
        }
        return rollResult;
    }

}
