
// https://www.youtube.com/watch?v=Ts3kTbdQ_4U

import Card from './Card'
import './Pricing.css'

export default function Pricing() {
    return (
        <div className="pricing-container">
            <h2>Pricing</h2>
        
            <Card 
                imgSrc=""
                imgAlt="standard pricing"
                title="$2500/6 Months"
                description="Include:
                1. 500 question
                2. 200 classes
                "
                items={
                    <ul>
                        <li>20 Courses</li>
                        <li>Format/enhance resume</li>
                        <li>500 question on equity</li>
                        <li>200 question on hedge funds</li>
                    </ul>
                }
                buttonText="Register with Standard Pricing"
                navPath="/standardPricing"
            />
            <Card 
                imgSrc=""
                imgAlt="premium pricing"
                title="$5000/6 Months"
                description="Include:
                all the standard parts
                plus" 
                items={
                    <ul>
                        <li>one-on-one tutooring</li>
                        <li>Format/enhance resume</li>
                        <li>500 question on equity</li>
                        <li>200 question on hedge funds</li>
                    </ul>
                }
                buttonText="Register with Premium Pricing"
                navPath="/premiumPricing"
            />
        </div>
    )
}