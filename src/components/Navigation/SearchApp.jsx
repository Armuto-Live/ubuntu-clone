import React from 'react'

import { styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xxs')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `2.5rem`,
    width: '0ch',
        '&:focus': {
          minWidth: '66vw',
          paddingLeft: `12px`,
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
          placeholder:"search",
          color:"black",
      },
      [theme.breakpoints.up('sm')]: {
        width: '0',
        '&:focus': {
          minWidth: '70vw',
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
        },
      },
      [theme.breakpoints.up('md')]: {
        width: '0',
        '&:focus': {
          minWidth: '78vw',
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
          marginRight:"550px"
        },
      },
      [theme.breakpoints.up('lg')]: {
        width: '0',
        '&:focus': {
          minWidth: '60vw',
          backgroundColor: "#f5f5f5",
          border:"2px solid #2E96FF",
          marginRight:"550px"
        },
      },
      [theme.breakpoints.up('xl')]: {
        width: '0ch',
        '&:focus': {
          position:"relative",
          backgroundColor: "red",
          border:"2px solid #2E96FF",
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
      <StyledInputBase placeholder='Search our sites'/>
    </Search>
  )
}

export default SearchApp