import { motion } from 'framer-motion'
import * as React from 'react'
import { Link } from 'react-router-dom'


export const Word = ({ link,path }) => <Link to ={path} className='text-sm md:text-base font-semibold text-gray-400'>{link}</Link>

const Paragraph = ({ link1, link2, link3, link4, link5, link6 ,path }) => (
  <div className='mb-5 flex flex-col gap-7 '>
    <Word link={link1} path={path} />
    <Word link={link2} path={path} /> 
    <Word link={link3} path={path} />
    <Word link={link4} path={path} />
    <Word link={link5}  path={path} />
    <Word link={link6} path={path} />
  </div>
)

export const ContentPlaceholder = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className='px-10 transform-cpu '
  >
    <Paragraph
      link1={link1} path='/'
      link2={link2}
      link3={link3}
      link4={link4}
      link5={link5}
      link6={link6}
    />
  </motion.div>
)