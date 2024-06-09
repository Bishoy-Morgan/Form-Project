import { React, Component } from 'react'

export class Basic extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render () {
        const { values, handleChange } = this.props
        return (
            <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 h-[90%] p-5 backdrop-blur-sm shadow-2xl shadow-zinc-400 rounded-lg flex flex-col justify-evenly items-start'>
                <div className='w-full h-[10%] flex justify-center items-center text-[26px] lg:text-3xl text-zinc-900 font-extrabold'>
                    <h1>Personal Information</h1>
                </div>
                <div className='w-full h-[10%] mt-5' >
                    <div className='w-[80%] lg:w-[85%] h-1/3 mx-auto flex justify-between pl-3 tracking-widest text-xs lg:text-sm text-zinc-800'>
                        <h5>Basic</h5>
                        <h5>Bio</h5>
                        <h5>Review</h5>
                        <h5>Submit</h5>
                    </div>
                    <div className='w-[75%] lg:w-[85%] h-2/3 mx-auto flex justify-evenly items-center'>
                        <div className='w-2 lg:w-3 h-2 lg:h-3 bg-zinc-600 border-2 border-zinc-50 rounded-full'></div>
                        <div className='w-12 lg:w-16 h-0.5 bg-zinc-600 border border-zinc-50 rounded-full'></div>
                        <div className='w-2 lg:w-3 h-2 lg:h-3 bg-zinc-600 rounded-full'></div>
                        <div className='w-12 lg:w-16 h-0.5 bg-zinc-600 rounded-full'></div>
                        <div className='w-2 lg:w-3 h-2 lg:h-3 bg-zinc-600 rounded-full'></div>
                        <div className='w-12 lg:w-16 h-0.5 bg-zinc-600 rounded-full'></div>
                        <div className='w-2 lg:w-3 h-2 lg:h-3 bg-zinc-600 rounded-full'></div>
                    </div>
                </div>

                <div className='w-full h-[60%] mt-8 flex flex-col justify-evenly font-semibold text-zinc-800 ' >
                    <label className='text-lg font-extrabold mb-1'>First Name</label>
                    <input 
                        className='p-2 outline-none text-zinc-800 focus:border focus:shadow-zinc-500 focus:shadow-md  focus:border-zinc-500 text-sm rounded-lg bg-transparent border border-zinc-400 mb-4 shadow placeholder:text-zinc-500'
                        required
                        type='text' 
                        placeholder='Ex. Robert' 
                        defaultValue={values.firstName}
                        onChange={handleChange('firstName')}
                    />
                    <label className='text-lg font-extrabold mb-1'>Last Name</label>
                    <input 
                        className='p-2 outline-none text-zinc-800 focus:border focus:shadow-zinc-500 focus:shadow-md focus:border-zinc-500 text-sm rounded-lg bg-transparent border border-zinc-400 mb-4 shadow placeholder:text-zinc-500'
                        required
                        type='text' 
                        placeholder='Ex. Washinton' 
                        defaultValue={values.lastName}
                        onChange={handleChange('lastName')}
                    />
                    <label className='text-lg font-extrabold mb-1'>Email</label>
                    <input 
                        className='p-2 outline-none text-zinc-800 focus:border focus:shadow-zinc-500 focus:shadow-md focus:border-zinc-500 text-sm rounded-lg bg-transparent border border-zinc-400 mb-4 shadow placeholder:text-zinc-500'
                        required
                        type='eamil' 
                        placeholder='Your e-mail ( Ex. Robert@example.com )' 
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                    />
                </div>
                <div className='w-full h-[10%]'>
                    <button 
                        className='w-full h-full rounded-lg bg-zinc-800 text-zinc-50 tracking-widest font-bold' 
                        onClick={this.continue}>CONTINUE</button>
                </div>
            </div>
        )
    }
}

export default Basic;