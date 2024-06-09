import { React, Component } from 'react'
import { Basic } from './Basic';
import { Bio } from './Bio';
import { Review } from './Review'
import { Success } from './Success'


export class Form extends Component {
    state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
        };

    // nextStep 
        nextStep = () => {
            const { step } = this.state;
            this.setState({
                step: step + 1
            })
        }

    // prevStep 
        prevStep = () => {
            const { step } = this.state;
            this.setState({
                step: step - 1
            })
        }

    // Handle fields change
    handleChange = input => e => {
        this.setState( { [input]: e.target.value } )
    }

    render () {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }
        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return (
                    <Basic 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <Bio 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 3:
                return (
                    <Review 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
            ) 
            case 4:
                return (
                    <Success />
                )
            default:
                return (
                    <Basic />
                )        
        }
    }
}

