import React, { memo } from 'react';

import { StepHeaderProps } from '.';

import csx from './StepHeader.scss';

export const StepHeader = memo(({ label, description }: StepHeaderProps) => {
  return (
    <header className={csx.stepHeader}>
      <h5 className={csx.title}>{label}</h5>
      <span className={csx.description}>{description}</span>
    </header>
  );
});
