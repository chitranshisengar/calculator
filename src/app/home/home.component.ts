import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    subTotal: any;
    operand1: string = '';
    operand2: string = '';
    operator: any;
    operatorSet: boolean = false;
    calculationString: string = '';
    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
    }


    clickKey(key) {
        if (!this.operatorSet && ['x', '/', '-', '+'].indexOf(key) !== - 1) {
            this.operator = key;
            this.operatorSet = true;
        }
        if (!this.operatorSet) {
            this.operand1 += key;
        }
        if (this.operatorSet && this.operator !== key) {
            this.operand2 += key;
        }
        if (this.operatorSet &&  this.operand2 &&  this.operand1 && ['x', '/', '-', '+'].indexOf(key) !== - 1) {
            this.finalAnswer();
            this.operand1=this.subTotal;
            this.operand2='';
            this.operator = key;
            this.operatorSet = true;
        }

        // this.calculationString = (this.operand1 ? parseFloat(this.operand1) : '') + this.operator + (this.operand2 ? parseFloat(this.operand2) : '');
        this.calculationString +=key;
    }

    finalAnswer() {

        switch (this.operator) {
            case '/':
                this.subTotal = parseFloat(this.operand1) / parseFloat(this.operand2);
                break;
            case 'x':
                this.subTotal = parseFloat(this.operand1) * parseFloat(this.operand2);
                break;
            case '+':
                this.subTotal = parseFloat(this.operand1) + parseFloat(this.operand2);
                break;
            case '-':
                this.subTotal = parseFloat(this.operand1) - parseFloat(this.operand2);
                break;
        }
    }
}
