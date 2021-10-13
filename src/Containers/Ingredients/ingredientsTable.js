import React, { useState, useEffect } from "react";

import Section from '../../Components/Section/section';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBadge, MDBDataTableV5 } from 'mdbreact';

const IngredientTable = (props) => {
    
    return(
        <MDBContainer className='mt-3'>
        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <Section title='INGREDIENTS' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={props.data}
                    searchTop
                    searchBottom={false}
                  />
                </MDBCardBody>
              </MDBCard>
            </Section>
          </MDBCol>
        </MDBRow>
        </MDBContainer>);
};

export default IngredientTable;
