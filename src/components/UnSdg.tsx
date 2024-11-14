import React, { useMemo } from 'react';

interface UnSdgProps {
  goal: number | 'all' | 'circle';
  label?: string;
  width?: string | number;
  height?: string | number;
  colorOnly?: boolean;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const sdgColors = {
  1: '#e5243b',
  2: '#dda63a',
  3: '#4c9f38',
  4: '#c5192d',
  5: '#ff3a21',
  6: '#26bde2',
  7: '#fcc30b',
  8: '#a21942',
  9: '#fd6925',
  10: '#dd1367',
  11: '#fd9d24',
  12: '#bf8b2e',
  13: '#3f7e44',
  14: '#0a97d9',
  15: '#56c02b',
  16: '#00689d',
  17: '#19486a',
} as const;

const sdgTitles = {
  1: 'No Poverty',
  2: 'Zero Hunger',
  3: 'Good Health and Well-being',
  4: 'Quality Education',
  5: 'Gender Equality',
  6: 'Clean Water and Sanitation',
  7: 'Affordable and Clean Energy',
  8: 'Decent Work and Economic Growth',
  9: 'Industry, Innovation and Infrastructure',
  10: 'Reduced Inequalities',
  11: 'Sustainable Cities and Communities',
  12: 'Responsible Consumption and Production',
  13: 'Climate Action',
  14: 'Life Below Water',
  15: 'Life on Land',
  16: 'Peace, Justice and Strong Institutions',
  17: 'Partnerships for the Goals',
  all: 'All Sustainable Development Goals',
  circle: 'SDG Circle of Goals',
} as const;

export const UnSdg: React.FC<UnSdgProps> = ({
  goal,
  label,
  width = '254px',
  height = '254px',
  colorOnly = false,
  loading = 'lazy',
  fetchPriority = 'low',
}) => {
  const imageUrl = useMemo(() => {
    if (typeof goal === 'number') {
      return `https://raw.githubusercontent.com/UNStats/sdgs-data/master/images/en/SDG-${goal}.svg`;
    }
    return `https://raw.githubusercontent.com/UNStats/sdgs-data/master/images/en/SDG-${goal === 'all' ? 'TITLE' : 'CIRCLE'}.svg`;
  }, [goal]);

  const altText = label || sdgTitles[typeof goal === 'number' ? goal as keyof typeof sdgTitles : goal];
  const bgColor = typeof goal === 'number' ? sdgColors[goal as keyof typeof sdgColors] : undefined;

  if (colorOnly && typeof goal === 'number') {
    return (
      <div
        style={{
          width,
          height,
          backgroundColor: bgColor,
          borderRadius: '4px',
        }}
        role="img"
        aria-label={altText}
      />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        width,
        height,
        display: 'block',
      }}
      loading={loading}
      fetchpriority={fetchPriority}
    />
  );
};