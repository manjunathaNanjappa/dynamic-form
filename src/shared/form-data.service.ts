import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formData: any;

  constructor(private http: HttpClient) {}

  async getFormData(drugType: string) {
    await this.http
      .get<any>('/assets/json-data/drug1.json')
      .subscribe((data) => {
        console.log('data', data);
        this.formData = data;
      });
    console.log('this.formData', this.formData);
    return this.formData;
  }
}
