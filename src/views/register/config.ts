import { req, min, max, url, atleastOneChecked, date } from 'shared/forms';

import { RegisterConfig } from '.';
import { SelectItem } from 'shared/ui';

export const STEPS_COUNT = 4;

export const [CREDENTIALS, PERSONAL_INFO, WORK, ALMOST_DONE] = Array.from(
  { length: STEPS_COUNT },
  (_, idx) => idx
);

export const config: RegisterConfig = [
  {
    label: 'Email & Password',
    description: `Make sure your password is secure`,
    formConfig: [
      { label: 'Email', validators: [req] },
      {
        label: 'Password',
        validators: [req, min(4), max(20)]
      },
      {
        label: 'Repeated password',
        validators: [req, min(4), max(20)]
      }
    ]
  },
  {
    label: 'Personal informations',
    description: `Will be used for notifications and searching purposes`,
    formConfig: [
      {
        label: 'First name',
        validators: [req, min(4), max(20)]
      },
      {
        label: 'Last name',
        validators: [req, min(4), max(20)]
      },
      {
        label: 'Date of birth',
        validators: [date]
      },
      {
        label: 'Gender',
        value: [
          { id: 0, label: 'Male', value: false },
          { id: 1, label: 'Female', value: false }
        ] as SelectItem[]
      }
    ]
  },
  {
    label: 'Work & Company',
    description: `Describe yourself for other users`,
    formConfig: [
      {
        label: 'Position',
        value: []
      },
      {
        label: 'Seniority',
        value: []
      },
      {
        label: 'Company'
      },
      {
        label: 'Years of experience'
      },
      {
        label: 'Technologies',
        value: []
      }
    ]
  },
  {
    label: 'Almost done!',
    description: `Read our policy and confirm account creation`,
    formConfig: [
      {
        label: 'Company regulations',
        value: false
      },
      {
        label: 'Email notification',
        value: false
      }
    ]
  }
];
