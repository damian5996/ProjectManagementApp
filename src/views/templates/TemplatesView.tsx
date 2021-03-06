import React, { useEffect, useCallback } from 'react';
import { useHistory, RouteChildrenProps } from 'react-router';

import { TemplatesHeader, TemplatesSearch, TemplateTiles } from '.';

import csx from './TemplatesView.scss';

interface TemplatesViewProps extends RouteChildrenProps<{ category: string }> {}

const categories = ['all', 'recommended', 'top', 'recent', 'yours'];

const TemplatesView = ({ match }: TemplatesViewProps) => {
  const { category: activeCategory } = match.params;

  const history = useHistory();

  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      history.replace(categories[0]);
    }
  }, [activeCategory]);

  const handleCategoryChange = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    history.push(e.currentTarget.getAttribute('data-category'));
  }, []);

  return (
    <div className={csx.templatesView}>
      <TemplatesHeader
        activeCategory={match.params.category}
        categories={categories}
        onCategoryClick={handleCategoryChange}
      />
      <TemplatesSearch />
      <TemplateTiles />
    </div>
  );
};

export default TemplatesView;
