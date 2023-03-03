import React from 'react'

import { styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    backgroundColor: "#e95420",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    width: '100%',[theme.breakpoints.up('sm')]: {
        width: '1ch',
        '&:focus': {
          width: '200px',
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
          position:"relative",
        },
      },
      [theme.breakpoints.up('md')]: {
        width: '1ch',
        '&:focus': {
          minWidth: '350px',
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
          placeholder:"search",
        },
      },
  },
}));

function SearchApp() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase/>
    </Search>
  )
}

export default SearchApp