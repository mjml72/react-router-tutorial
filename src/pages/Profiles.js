import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profiles() {
    const {id} = useParams();
  return (
    <h1>Profile {id}</h1>
  )
}
