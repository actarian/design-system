import React, { SVGProps } from 'react';
import styled from 'styled-components';

const RatingSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    /*
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    */
    fill="currentColor"
    shapeRendering="geometricPrecision">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Rating = styled(RatingSvg)`
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  transition: color 200ms ease, transform 200ms ease;
`;

const RatingIcon = React.memo(Rating);

RatingIcon.displayName = 'RatingIcon';

export default RatingIcon;
