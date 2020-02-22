import React from 'react';

import { StepNavItemProps } from '.';

import { Description, InjectedStepProps } from 'shared/ui';

import classes from './StepNavItem.scss';

const StepNavItem = ({ step, ...rest }: StepNavItemProps) => {
  const { isActive, onStepChange, idx } = rest as InjectedStepProps;
  
  const rootClasses = [ 
    classes.root,
    isActive ? classes.active : classes.unactive
  ].join(' ');

  return (
    <div className={rootClasses}>
      <button onClick={() => onStepChange(idx)}>
        <svg width="28" height="28" viewBox="0 0 48 48">
          <path d={step.path} />
        </svg>

        <Description>{step.title}</Description>
      </button>
    </div>
  );
};

export default StepNavItem;
