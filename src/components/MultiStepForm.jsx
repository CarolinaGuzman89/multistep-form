import { useState } from "react";


const initialFormData = {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: ""
}

export default function MultiStepForm() {
    const [currentStep, SetCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormData)
    }

    const handleNextStep = () => {
        
        currentStep == 1 ? SetCurrentStep(2) : SetCurrentStep(3);
    }

    const handlePrevStep = () => {
        currentStep == 3 ? SetCurrentStep(2) : SetCurrentStep(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for submission");
        SetCurrentStep(1);
        setFormData(initialFormData);
    }


    if (currentStep === 1){
        return (
            <form className="container">
                <h2>Personal Information</h2>
                <div className="step block">
                    <label>Step {currentStep} of 3</label>
                    <progress value={currentStep} max={3}  />
                </div>
                <div className="block">
                    <label htmlFor="name">Full Name</label>
                    <input 
                        name="name"
                        id="name"
                        className="input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className=" block">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        className="input"
                        placeholder="email@example.com"
                        pattern=".+@globex\.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="button" onClick={handleNextStep} className="button">
                    Next
                </button>
            </form>
        )
    } else if (currentStep == 2) {
        return (
            <form onSubmit={handleSubmit} className="container">
                <h2>Address</h2>
                <div>
                    <label>Step {currentStep} of 3</label>
                    <progress value={currentStep} max={3} />
                </div>
                <div className="block">
                    <label htmlFor="address">Address</label>
                    <input
                        required
                        name="address"
                        id="address"
                        type="address"
                        className="input"
                        placeholder="What is your address?"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="block">
                    <label htmlFor="city">City</label>
                    <input
                        required
                        name="city"
                        id="city"
                        className="input"
                        placeholder="What city do you live in?"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="block">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                        required
                        name="zipcode"
                        id="zipcode"
                        type="number"
                        className="input"
                        placeholder="What is your zipcode?"
                        value={formData.zipcode}
                        onChange={handleChange}
                    />
                </div>
                <div className="block">
                    <button className="button" type="button" onClick={handleNextStep} >
                        Next
                    </button>
                    <button type="button" className="previous" onClick={handlePrevStep}>
                        Previous
                    </button>
                </div>
            </form>
        )
    } else if (currentStep === 3) {
        return (
            <form onSubmit={handleSubmit} className="container">
                <h2>Confirm your information:</h2>
                <div>
                    <label>Step {currentStep} of 3</label>
                    <progress value={currentStep} max={3} />
                </div>
                <table className="block">
                    <tbody className="table">
                    {Object.keys(formData).map((key) => {
                        return (
                        <tr key={key}>
                            <td className="key">{key}</td>
                            <td className="data">{formData[key]}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
                <div className="block">
                    <button className="button" type="submit">
                    Submit
                    </button>
                    <button type="button" className="previous" onClick={handlePrevStep}>
                    Previous
                    </button>
                </div>
                </form>
            );
    } else {
        return null;
    }
}
