import React from 'react'
import { motion } from "framer-motion";
import countryFacts from "../api/countryData.json"
import "./About.css"

const About = () => {
  return (
    <section className='Container'>
      <h2 className="Container-title">Here are the interesting facts</h2>
      <p className='abc'>we're proud of</p>

      <div className="grediant-card">
        {
          countryFacts.map((country, idx) => (
            <motion.div 
              className="card" 
              key={idx}
              initial={{ opacity: 0, y: 50 }}   // start invisible + down
              animate={{ opacity: 1, y: 0 }}   // animate to visible + normal pos
              transition={{ duration: 0.6, delay: idx * 0.2 }} // stagger animation
            >
              <div className="container-card">
                <p className="card-title">{country.countryName}</p>
                <p><span className="card-description">Capital:</span> {country.capital}</p>
                <p><span className="card-description">Population:</span> {country.population}</p>
                <p><span className="card-description">Interesting Fact:</span> {country.interestingFact}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default About
