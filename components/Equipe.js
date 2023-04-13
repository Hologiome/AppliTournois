import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography
} from "mdb-react-ui-kit";
// import { useParams } from "react-router-dom";
// import Appartenir from "../Components/Appartenir";

export default function Equipe(props) {
  const url = "https://keran.alwaysdata.net/api/joueur/1"
  const fetchOptions = { method: "GET" };
  // -- state = liste des personnes
  const [infoJoueur, setJoueur] = useState({});
  

  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, []);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dataJSON) => {
        setJoueur(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={infoJoueur.img}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible" }}
                  >
                    Editer profile
                  </MDBBtn>
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{infoJoueur.pseudo}</MDBTypography>
                  <MDBCardText>{infoJoueur.date_inscription}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      {infoJoueur.point}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Points
                    </MDBCardText>
                  </div>

                  <div>
                    <MDBCardText className="mb-1 h5">
                      {infoJoueur.win}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Match Win
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      {infoJoueur.win}
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Tournois Win
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Team</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    {/* <Appartenir></Appartenir> */}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )}



  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    // item: {
    // },
    // image: {
    //   width: 200,
    //   height: 200,
    //   margin: 5,
    //   backgroundColor: 'gray'
    // },
    // title: {
    //   fontSize: 20,
    // },
    // .gradient-custom-2 {
    //   /* fallback for old browsers */
    //   background: #fbc2eb;
    
    //   /* Chrome 10-25, Safari 5.1-6 */
    //   background: -webkit-linear-gradient(
    //     to right,
    //     rgba(251, 194, 235, 1),
    //     rgba(166, 193, 238, 1)
    //   );
    
    //   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    //   background: linear-gradient(
    //     to right,
    //     rgba(251, 194, 235, 1),
    //     rgba(166, 193, 238, 1)
    //   );
    
  });

