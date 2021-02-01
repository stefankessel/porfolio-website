import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Loader from "react-loader-spinner";
import { StyledFormBox,  StyledButton, StyledTitle } from './style';
import { Form, Formik} from 'formik';
import * as Yup from 'yup'
import { FiMail, FiUser, FiMessageCircle } from 'react-icons/fi'
import { TextInput, TextArea } from './FormLib';
import { mailAction } from '../../redux/actions/mailAction';
import Modal from '../Modal/Modal';
import { Confirmation } from './Confirmation'

const ContactForm = () => {

    const [show, setShow] = useState(false);
    const [confirmName, setConfirmName ] = useState('')

    const dispatch = useDispatch();
    

    // useEffect( () => {
    //     const form = document.querySelector('#contact-form')
    //     form.onSubmit = () => {
    //         console.log('form submitted')
    //         if(mail){
    //             setShow(true)
    //             setTimeout( () => {
    //                 setShow(false)
    //             },4000)        
    //         }
    //     }

    // },[mail])

    return (
        <div>
            {show && (<Modal show={show} close={() => setShow(false)}>
                <Confirmation name={confirmName}/>
            </Modal>)}
            <StyledTitle size='1.2rem'>Fill out the form and i get back to you as soon as possible</StyledTitle>
            <StyledFormBox>
                <Formik
                    initialValues = {{
                        email:'',
                        name:'',
                        subject:'',
                        message:''
                    }}
                    validationSchema = {
                        Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required'),
                            name: Yup.string().required('Required'),
                            subject: Yup.string().required('Required'),
                            message: Yup.string().required('Required')
                        })
                    }
                    onSubmit = {(values, {setSubmitting, resetForm}) => {
                        dispatch(mailAction(values));
                        resetForm();
                        
                        setSubmitting()

                        if(values){
                            setConfirmName(values.name)
                            setShow(true)
                            setTimeout( () => {
                                setShow(false)
                            }, 3500)
                        }
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <TextInput 
                                name='name'
                                type='text'
                                label='Name'
                                placeholder='Name'
                                icon={<FiUser/>}
                                
                            />
                            <TextInput 
                                name='email'
                                type='email'
                                label='Email'
                                placeholder='Email'
                                icon={<FiMail/>}
                            />
                            <TextInput 
                                name='subject'
                                type='text'
                                label='Subject'
                                placeholder='Subject/ Thema'
                                icon={<FiMessageCircle/>}
                                
                            />
                            <TextArea 
                                name='message'
                                label='Message'
                                placeholder='Message/ Nachricht'
                                
                            />
                            {!isSubmitting && (<StyledButton type='submit'>Send</StyledButton>)}
                            {isSubmitting && (<Loader
                                                type="Audio"
                                                color="#00BFFF"
                                                height={100}
                                                width={100}
                                                timeout={1000}
                                            />)}
                        </Form>
                    )}
                </Formik>
            </StyledFormBox>
        </div>
    )
}

export default ContactForm
