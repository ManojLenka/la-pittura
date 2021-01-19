import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CategoryLists,
  CategoryMap,
  SellerNavMap,
  SellerNavs,
} from 'src/app/constants/navigation.constant';

@Component({
  selector: 'app-new-creation',
  templateUrl: './new-creation.component.html',
  styleUrls: ['./new-creation.component.scss'],
})
export class NewCreationComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  categories = CategoryLists.slice(1);
  categoryMap = CategoryMap;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  files = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      category: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      artistName: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      material: ['', Validators.required],
      dimension: this._formBuilder.group({
        h: ['', Validators.required],
        w: ['', Validators.required],
        d: ['', Validators.required],
      }),
      weight: ['', Validators.required],
    });
    this.forthFormGroup = this._formBuilder.group({
      price: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }

  onClick() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        const file = fileInput.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0 });
      }
      this.upload();
    };
    fileInput.click();
  }

  private upload() {
    this.fileInput.nativeElement.value = '';
    this.files.forEach((file) => {
      this.callUploadService(file);
    });
  }

  callUploadService(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    // this.uploadService.upload(formData).pipe(
    //   map(event => {
    //     switch (event.type) {
    //       case HttpEventType.UploadProgress:
    //         file.progress = Math.round(event.loaded * 100 / event.total);
    //         break;
    //       case HttpEventType.Response:
    //         return event;
    //     }
    //   }).subscribe((event: any) => {
    //     if (typeof (event) === 'object') {
    //       console.log(event.body);
    //     }
    //   });
  }
}
