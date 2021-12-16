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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div 
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;