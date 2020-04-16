import React from 'react';

import { IMGS } from 'consts';

import csx from './Logo.scss';

export const Logo = () => {
  return <img className={csx.root} src={IMGS + '/Logo.png'} />;
};
