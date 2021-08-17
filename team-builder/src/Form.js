import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        
    const name = evt.target.name
    
    const value = evt.target.value
    
    update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return  (
        <form className='form container' onSubmit={onSubmit}>
        <div className='form-group input'>
            <label>Name
              <input 
                type='text'
                name='name'
                placeholder='enter name...'
                maxLength='30'
                onChange={onChange}
                value={values.name}
                />
            </label>
            <label>Email
              <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                />
            </label>
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                <option value=''>-- Select a Role --</option>
                <option value='Backend Engineer'>Engineer</option>
                <option value='Frontend Engineer'>Engineer</option>
                <option value='Senior Backend Engineer'>Senior Engineer</option>
                <option value='Senior Frontend Engineer'>Engineer</option>
                <option value='UX Designer'>Designer</option>
                </select>
            </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}