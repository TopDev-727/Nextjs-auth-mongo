import React from 'react';
import { Typography } from '@material-ui/core';

interface Props {
  children: string;
}

const PageTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  );
};

export default PageTitle;
