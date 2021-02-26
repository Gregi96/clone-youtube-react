import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <Paper elevation={6} style={{ padding: '25px' }}>
      <form onSubmit={handleOnSubmit}>
        <TextField fullWidth label="Search..." onChange={handleOnChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
