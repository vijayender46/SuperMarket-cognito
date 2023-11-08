import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link to='/'>Back to Home Page</Link>
    </>
  )
}
