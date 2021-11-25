import React from 'react';
import {Box, Text, Heading} from 'theme-ui';
import PropTypes from 'prop-types';


export default function SectionHeader({title, slogan, isWhite}) {
  return (
    <Box sx={{variant: 'sectionHeader'}}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}


SectionHeader.propTypes = {
  slogan: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isWhite: PropTypes.bool.isRequired,
};
