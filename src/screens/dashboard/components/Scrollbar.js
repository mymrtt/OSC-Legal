import React from 'react';
import ReactScrollbar from 'react-scrollbar';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  max-height: 100%;
  width: 70%;

  .scrollarea {
    ${({ full }) => full && css`
      max-height: 100%;
      width: 100%;
    `};

    max-height: ${props => (props.maxHeight && props.maxHeight)};
  }

  .scrollarea .scrollbar-container {
		opacity: 0.12;
	}

	.scrollarea:hover .scrollbar-container {
		opacity: 0.22;
	}

	.scrollarea .scrollbar-container.active, 
	.scrollarea .scrollbar-container:hover {
    opacity: .4 !important;
	}

  .scrollarea .scrollbar-container.vertical {
    width: ${props => (props.scrollWidth ? props.scrollWidth : '8px')};
    height: 100%;
    right: 2px;
    top: 0;
    border-radius: 6px;
    z-index: 3;
    /* background: #cecece; */
  }

  .scrollarea .scrollbar-container.vertical .scrollbar {
    width: ${props => (props.scrollWidth ? props.scrollWidth : '8px')};
    height: 20px;
    background: var(--strytegy-second-text);
    margin-left: 0;
    border-radius: 6px;
  }

  @media (max-width: 1024px) {
    max-height: 59vh;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`;

const Scrollbar = ({
	full, maxHeight, scrollWidth, ...props
}) => (
	<Container full={full} maxHeight={maxHeight} scrollWidth={scrollWidth}>
		<ReactScrollbar
			speed={0.8}
			horizontal={false}
			smoothScrolling
			stopScrollPropagation
			ref={props.scrollbar}
			{...props}
		>
			{props.children}
		</ReactScrollbar>
	</Container>
);

export default Scrollbar;
