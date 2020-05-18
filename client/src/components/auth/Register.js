import React, { Fragment, useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '', 
        password2: ''
    });

    const { name, email, password, password2 } = formData; 

    const onChange = e => 
        setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log(formData);
        }
    }

    return <Fragment>
        <h1>Register</h1>
        <form className='form' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={e => onChange(e)}
                    required
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    value={email} 
                    onChange={e => onChange(e)}
                    required 
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password} 
                    onChange={e => onChange(e)}
                    minLength="6"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2} 
                    onChange={e => onChange(e)}
                    minLength="6"
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
    </Fragment>
}

export default Register