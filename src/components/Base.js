import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {

  hidden:{
    opacity: 0,
    x: '100vw',
  },
  visible:{
    opacity: 1,
    x: 0
  },
  transition:{
    type: "spring", 
    delay: 0.5
  }

}

const nextVariant = {

 hidden:{
   x: "-100vw"
 },
 visible:{
   x: 0,
   transition:{
    type: "spring", 
    stiffness: 120
  }
 },
 exit:{
  x:'-100vw',
  transition: {ease: "easeInOut"}
}
  
}

const buttonVariant={
  visible:{
    x: -20,
    transition: {delay: 2}
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div 
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next"
          variants={nextVariant}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;