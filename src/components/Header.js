import { AppBar, Toolbar, Grid, InputBase, Badge, makeStyles, IconButton } from '@material-ui/core'
import {
  NotificationsNone,
  ChatBubbleOutline,
  SearchOutlined,
  PowerSettingsNewOutlined
} from '@material-ui/icons'
import React from 'react'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',

  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)
    }
  }
}))
export default function Header() {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container
          alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search topics"
              className={classes.searchInput}
              startAdornment={<SearchOutlined fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutline fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewOutlined fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
