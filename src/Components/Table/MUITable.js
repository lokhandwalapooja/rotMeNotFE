import React from "react";
import Section from "../Section/section";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBDataTableV5,
} from "mdbreact";

const MUITable = (props) => {
  const { addButton, title, data , addClicked, dataTarget} = props;
  return (
    <MDBContainer className="mt-3">
      <MDBRow className="py-3">
        <MDBCol md="12">
          {addButton ? 
          <i className="fas fa-plus fa-2x mb-2 clickIcons icon_primary" 
            data-toggle="modal"
            data-target={dataTarget}
            data-backdrop="static"
            data-keyboard="false"
            onClick={addClicked} style={{ float: "right" }}
          />
            // <button 
            // className="btn btn-primary"
            // data-toggle="modal"
            // data-target={dataTarget}
            // data-backdrop="static"
            // data-keyboard="false"
            // onClick={addClicked} style={{ float: "right" }}>
            //   Add
            // </button>
          : null}
          <Section title={title} noBorder>
            <MDBCard>
              <MDBCardBody>
                <MDBDataTableV5
                  hover
                  entriesOptions={[5, 20, 25]}
                  entries={5}
                  pagesAmount={4}
                  data={data}
                  searchTop
                  searchBottom={false}
                />
              </MDBCardBody>
            </MDBCard>
          </Section>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MUITable;
