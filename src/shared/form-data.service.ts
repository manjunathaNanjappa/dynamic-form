import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formData: any;

  constructor(private http: HttpClient) {}

  async getFormData(drugType: string) {
    let path = '/assets/json-data/' + drugType + '.json';
    return new Promise((resolve) => {
      this.http.get<any>(path).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
