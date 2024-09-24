import React from 'react'
import '../style/Organisation.css'
import { OrganisationDate } from './OrganisationDate'

export const Organisation = () => {
  return (
    <div className='Organisation'>
        <OrganisationDate />
        <div className='Organisation_icon'>Icon</div>

        <button>ADD EVENT</button>
    </div>
  )
}
