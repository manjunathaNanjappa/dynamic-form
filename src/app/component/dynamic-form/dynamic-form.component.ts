import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormDataService } from '../../../shared/form-data.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  formData: any;
  constructor(private formDataService: FormDataService) {}

  async ngOnInit() {}

  // ngOnChanges() {
  //   this.formData = this.getData('drug1');
  // }

  async getData(drugType: string) {
    let data = await this.formDataService.getFormData(drugType);
    console.log('data', data);
    return data;
  }
}
