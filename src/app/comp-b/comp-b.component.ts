import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-comp-b',
    templateUrl: './comp-b.component.html',
    styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {
    userForm: FormGroup = new FormGroup({});
    userData: any = {
        name: {
            name: "name",
            type: "text",
            value: "",
            label: "Name",
            rules: {}
        },
        addressPrimary: {
            name: "addressPrimary",
            type: "textarea",
            value: "",
            label: "Address Primary",
            rules: {}
        },
        block: {
            name: "block",
            type: "text",
            value: "",
            label: "Block",
            rules: {}
        },
        floor: {
            name: "floor",
            type: "number",
            value: "",
            label: "Floor",
            rules: {}
        },
        flatNo: {
            name: "flatNo",
            type: "textnumber",
            value: "",
            label: "Flat No",
            rules: {}
        },
        contactno: {
            name: "contactno",
            type: "number",
            value: "",
            label: "Contact No",
            rules: {
                required: true
            }
        },
        maritalStatus: {
            name: "maritalStatus",
            type: "select",
            value: "",
            label: "Marital Status",
            rules: {},
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
        }
    }

    // @ViewChild(FormCompComponent) formComp!: FormCompComponent;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit() {
    }

    onSubmit() {

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
