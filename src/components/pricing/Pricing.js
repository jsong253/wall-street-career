
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
                items={<ul><li>Water-melon</li>
                <li>Litchi</li>
                <li>Kiwi</li></ul>}
                buttonText="Register with Standard Pricing"
                navPath="/standardPricing"
            />
            <Card 
                imgSrc=""
                imgAlt="premium pricing"
                title="$5000/6 Months"
                description="Include:
                1. all the standard parts
                2. one-on-one classes"
                buttonText="Register with Premium Pricing"
                navPath="/premiumPricing"
            />
        </div>
    )
}