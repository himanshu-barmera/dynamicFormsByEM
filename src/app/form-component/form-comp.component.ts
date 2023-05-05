import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-comp',
    templateUrl: './form-comp.component.html',
    styleUrls: ['./form-comp.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCompComponent implements OnInit, AfterViewInit {
    @Input() data: any;
    fields: any[] = [];
    @Input() userForm!: FormGroup;
    @Output() userFormChange = new EventEmitter<FormGroup>();

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.userForm = this.fb.group(this.getFormControlsFields());
        this.userFormChange.emit(this.userForm);

        // this.userForm.controls = this.getFormControlsFields();

        // console.log(this.userForm.controls)

    }

    ngAfterViewInit(): void {
        // this.userForm = this.fb.group(this.getFormControlsFields());
        // this.userFormChange.emit(this.userForm);
    }

    parseDate(dDate: any) {
        if (dDate) {
            let timeDiff = Math.abs(Date.now() - new Date(dDate.target.value).getTime());
            let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
            console.log(age)
            this.userForm.patchValue({
                age: age
            });
            // this.userForm.addControl('age', new FormControl(''));
        }
    }

    getFormControlsFields() {
        const formGroupFields: any = {};
        for (const field of Object.keys(this.data)) {
            const fieldProps = this.data[field];
            const validators = this.addValidator(fieldProps.rules);
            formGroupFields[field] = new FormControl(fieldProps.value, validators);
            this.fields.push({ ...fieldProps, fieldName: field });
        }
        return formGroupFields;
    }

    private addValidator(rules: any) {

        // console.log(rules)
        // console.log(Object.keys(rules))

        if (!rules) {
            return [];
        }
        else {
            return rules;
        }

        // const validators = Object.keys(rules).map((rule) => {
        //     console.log(rules)
        //     switch (rule) {
        //         case "required":
        //             return [Validators.required];
        //         // case "default":
        //         //     return [];
        //         //add more cases for the future.
        //         // case "default":
        //         //     return [];
        //         // [Validators.required, Validators.pattern(rules[rule])]
        //         // case "minlength":
        //         //     return [Validators.minLength(rules[rule])];
        //         // case "maxlength":
        //         //     return [Validators.maxLength(rules[rule])];
        //         // case "pattern":
        //         //     return [Validators.pattern(rules[rule])];
        //         // case "email":
        //         //     return [Validators.email];
        //         // case "min":
        //         //     return [Validators.min(rules[rule])];
        //         // case "max":
        //         //     return [Validators.max(rules[rule])];
        //     }
        // });
        // return validators;
    }
}
