import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-check-strength',
  templateUrl: './password-check-strength.component.html',
  styleUrls: ['./password-check-strength.component.css'],
})
export class PasswordCheckStrengthComponent {
  @Input() public passwordToCheck!: string;

  bar0: string = 'gray';
  bar1: string = 'gray';
  bar2: string = 'gray';

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes['passwordToCheck'].currentValue;

    if (!password) {
      this.setBarColors('gray', 'gray', 'gray');
    } else if (password.length < 8) {
      this.setBarColors('red', 'red', 'red');
    } else {
      const charTypes = this.countCharacterTypes(password);

      if (charTypes.letters && charTypes.digits && charTypes.symbols) {
        this.setBarColors('green', 'green', 'green');
      } else if (
        (charTypes.letters && charTypes.digits) ||
        (charTypes.letters && charTypes.symbols) ||
        (charTypes.digits && charTypes.symbols)
      ) {
        this.setBarColors('yellow', 'yellow', 'gray');
      } else {
        this.setBarColors('red', 'gray', 'gray');
      }
    }
  }

  private countCharacterTypes(password: string): {
    letters: boolean;
    digits: boolean;
    symbols: boolean;
  } {
    const charTypes = { letters: false, digits: false, symbols: false };
    for (const char of password) {
      if (/[a-zA-Z]/.test(char)) {
        charTypes.letters = true;
      } else if (/[0-9]/.test(char)) {
        charTypes.digits = true;
      } else {
        charTypes.symbols = true;
      }
    }
    return charTypes;
  }

  private setBarColors(
    bar0Color: string,
    bar1Color: string,
    bar2Color: string
  ) {
    this.bar0 = bar0Color;
    this.bar1 = bar1Color;
    this.bar2 = bar2Color;
  }
}
