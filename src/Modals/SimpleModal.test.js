/* eslint-disable no-undef */
import React from 'react'
import {mount} from '@cypress/react'
import SimpleModal from './SimpleModal';

it('should open the modal when button is clicked', () => {
  mount(<SimpleModal/>);
  cy.viewport(1080, 760)
  cy.get('button').click()
})