import React from 'react';
import { makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    sideBar: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100vh',
        backgroundColor: '#253053'
    }
})
export default function SideBar() {
    const classes = useStyles()
    return (
        <div className={classes.sideBar}>
        </div>
    )
}
