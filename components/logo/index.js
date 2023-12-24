'use client'
import React from 'react'
import Image from 'next/image'
const Logo = ({className = 'w-48 h-48'}) => {
  return (
    <Image src={'/images/logo.svg'} alt='Logo' width={1080} height={1080} className={`${className}`} />
  )
}

export default Logo
