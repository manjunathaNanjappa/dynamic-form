import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormDataService } from '../../../shared/form-data.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  formData: any;
  drugType: string = '';
  dynamicForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formDataService: FormDataService,
    private formBuilder: FormBuilder,
    public message: NzMessageService
  ) {}

  async ngOnInit() {}

  async getData(drugType: string) {
    let data: any = await this.formDataService.getFormData(drugType);

    // sort data
    this.formData = data.fields.sort(function (a: any, b: any) {
      return a.order - b.order;
    });
    if (this.formData) {
      this.createForm(this.formData);
    }
  }

  createForm(formData: any) {
    for (let control of formData) {
      let validatorsForField: any = new Array();
      if (control.isRequired) {
        validatorsForField.push(Validators.required);
      }
      this.dynamicForm.addControl(
        control.key,
        this.formBuilder.control('', validatorsForField)
      );
    }
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      this.message.success('Form is Valid');
    } else {
      this.message.error('Fill all the required data');
    }
    console.log(this.dynamicForm.value);
  }
}
