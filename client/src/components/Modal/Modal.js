import React from 'react';
import classes from './modal.module.css';
import Backdrop from '../backdrop/Backdrop';

const Modal = (props) => {

    return (
        <>  
            <Backdrop showBackdrop= {props.show} closeBackdrop = {props.close}/>
            <div 
                className={classes.Modal}  
                style={{
                    transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </>
    )
}

export default Modal
