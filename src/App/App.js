import './App.css';
import { Fragment } from 'react';
import { ThemeProvider, makeStyles, CssBaseline, createTheme } from '@material-ui/core'
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import {PeopleOutline} from '@material-ui/icons'
import Employees from '../pages/employees/Employees';
const userStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100vw'

  }
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})
function App() {
  const classes = userStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideBar />

      <div className={classes.appMain}>
        <Header />
        <Employees/>
      </div>

      <CssBaseline />
    </ThemeProvider>

  );
}

export default App;
