// Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { FormErrorsModule, IconModule, StructuredDataModule } from '@spartacus/storefront';
import { TmaAddressFormComponent } from './tma-address-form.component';

@NgModule({
    imports: [
      CommonModule,
      I18nModule,
      StructuredDataModule,
      NgSelectModule,
      ReactiveFormsModule,
      IconModule,
      FormsModule,
      FormErrorsModule
    ],
    declarations: [TmaAddressFormComponent],
    exports: [TmaAddressFormComponent]
  })
  export class TmaAddressFormModule {
  }
