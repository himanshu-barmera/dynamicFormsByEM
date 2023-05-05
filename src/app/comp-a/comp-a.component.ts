import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormCompComponent } from '../form-component/form-comp.component';

@Component({
    selector: 'app-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

    userForm !: FormGroup;
    userData: any = {
        name: {
            name: "name",
            type: "text",
            value: "",
            label: "Name",
            rules: {
                // required: true,
            }
        },
        maritalStatus: {
            name: "maritalStatus",
            type: "select",
            value: "",
            label: "Marital Status",
            rules: {
                // required: true,
            },
            options: [
                {
                    label: "Select one",
                    value: "",
                },
                {
                    label: "Married",
                    value: "married",
                },
                {
                    label: "Single",
                    value: "single",
                },
            ],
        },
        age: {
            name: "age",
            type: "number",
            value: "",
            label: "Age",
            rules: {

            }
        },
        dateofBirth: {
            name: "dateofBirth",
            type: "date",
            value: "",
            label: "Date of Birth",
            rules: {
                required: true,
            }
        }
    }

    // @ViewChild(FormCompComponent) formComp!: FormCompComponent;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
    }

    onSubmit() {
        // console.log(this.userForm.value)

        this.userForm.markAllAsTouched();

        if (this.userForm.invalid) {
            alert('Invalid details.')
            return;
        }

        if (this.userForm.valid) {
            console.log(this.userForm.value)
        }


    }
}
