import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { DiceComponent } from './dice.component';

describe('DiceComponent', () => {
    let component: DiceComponent;
    let fixture: ComponentFixture<DiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DiceComponent],
            imports: [FontAwesomeModule, FormsModule]
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

    //roll method
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

    // increment method
    ['d20Count', 'd16Count', 'd12Count', 'd10Count', 'd8Count', 'd6Count', 'd4Count']
        .forEach((property) =>
            it(`should increment the ${property}`, () => {
                // Arrange
                const fixture = TestBed.createComponent(DiceComponent);
                const app = fixture.debugElement.componentInstance;
                app[property] = 1;

                // Act
                app.increment(property);

                // Assert
                expect(app[property]).toEqual(2);
            }));

    it('should throw error when an invalid property is incremented', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;
        let property = 'not a property'

        // Act & Assert
        expect(() => { app.increment(property) }).toThrow(new Error(`Could not increment property: ${property}`));
    });

    it('should throw error when incremented property is not a number', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;
        app.myProperty = true;
        let property = 'myProperty'

        // Act & Assert
        expect(() => { app.increment(property) }).toThrow(new Error(`Could not increment property: ${property}`));
    });

    // decrement method
    ['d20Count', 'd16Count', 'd12Count', 'd10Count', 'd8Count', 'd6Count', 'd4Count']
        .forEach((property) =>
            it(`should decrement the ${property}`, () => {
                // Arrange
                const fixture = TestBed.createComponent(DiceComponent);
                const app = fixture.debugElement.componentInstance;
                app[property] = 2;

                // Act
                app.decrement(property);

                // Assert
                expect(app[property]).toEqual(1);
            }));

    ['d20Count', 'd16Count', 'd12Count', 'd10Count', 'd8Count', 'd6Count', 'd4Count']
        .forEach((property) =>
            it(`should not decrement the ${property}`, () => {
                // Arrange
                const fixture = TestBed.createComponent(DiceComponent);
                const app = fixture.debugElement.componentInstance;
                app[property] = 1;

                // Act
                app.decrement(property);

                // Assert
                expect(app[property]).toEqual(1);
            }));

    it('should throw error when an invalid property is decremented', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;
        let property = 'not a property'

        // Act & Assert
        expect(() => { app.decrement(property) }).toThrow(new Error(`Could not decrement property: ${property}`));
    });

    it('should throw error when decremented property is not a number', () => {
        // Arrange
        const fixture = TestBed.createComponent(DiceComponent);
        const app = fixture.debugElement.componentInstance;
        app.myProperty = true;
        let property = 'myProperty'

        // Act & Assert
        expect(() => { app.decrement(property) }).toThrow(new Error(`Could not decrement property: ${property}`));
    });
});
