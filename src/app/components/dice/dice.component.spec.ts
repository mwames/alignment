import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceComponent } from './dice.component';

describe('DiceComponent', () => {
    let component: DiceComponent;
    let fixture: ComponentFixture<DiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should roll a number between 1 and 20', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;

        // Act
        let result = app.roll(20, 1);

        // Assert
        expect(result[0]).toBeGreaterThan(0);
        expect(result[0]).toBeLessThan(21);
    });

    it('should roll 3 numbers between 1 and 20', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;

        // Act
        let result = app.roll(20, 3);

        // Assert
        expect(result[0]).toBeGreaterThan(0);
        expect(result[0]).toBeLessThan(21);

        expect(result[1]).toBeGreaterThan(0);
        expect(result[1]).toBeLessThan(21);

        expect(result[2]).toBeGreaterThan(0);
        expect(result[2]).toBeLessThan(21);
    });
});
