import React from 'react';
import classes from './backdrop.module.css'

const Backdrop = (props) => (
    props.showBackdrop ? <div className={classes.Backdrop} onClick={props.closeBackdrop}></div> : null
)

export default Backdrop
