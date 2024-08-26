// Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved

import { AppliedCapacityAmount } from '../../model';
import { InjectionToken } from '@angular/core';
import { Converter } from '@spartacus/core';

export const AVAILABILITY_CHECK_NORMALIZER = new InjectionToken<Converter<any, AppliedCapacityAmount>>('AvailabilityCheckNormalizer');
