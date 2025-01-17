/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as t from 'io-ts';
import {
  apmTransactionDurationIndicatorSchema,
  apmTransactionErrorRateIndicatorSchema,
  indicatorDataSchema,
  indicatorSchema,
  indicatorTypesSchema,
} from '../schema';

type APMTransactionErrorRateIndicator = t.TypeOf<typeof apmTransactionErrorRateIndicatorSchema>;
type APMTransactionDurationIndicator = t.TypeOf<typeof apmTransactionDurationIndicatorSchema>;
type Indicator = t.TypeOf<typeof indicatorSchema>;
type IndicatorTypes = t.TypeOf<typeof indicatorTypesSchema>;
type IndicatorData = t.TypeOf<typeof indicatorDataSchema>;

export type {
  Indicator,
  IndicatorTypes,
  APMTransactionErrorRateIndicator,
  APMTransactionDurationIndicator,
  IndicatorData,
};
