
import { ButtonProps } from '@/interfaces'
import React from 'react'

export const Button:React.FC<ButtonProps> = ({title, action}) => {
  return (
   <button onClick={action} className="px-10 py-2 p-1 border-none bg-[#86DDE4] rounded-full hover:bg-[#aaeaee] hover:text-white transition-colors duration-300">{title}</button>
  )
}
