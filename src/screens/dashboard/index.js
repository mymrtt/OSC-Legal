// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import OrganizationScreen from './Organization/OrganizationScreen';

const Container = styled.div`
	width: 100%;
`;

const Index = () => (
	<Container>
		<OrganizationScreen/>
	</Container>
);

export default Index;
