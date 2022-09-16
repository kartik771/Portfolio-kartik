import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/KartikPruthi_Resume_Main.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//console.log(pdfjs.version)
const resumeLink =
//"https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
 // https://github.com/kartik771/Kartik-Portfolio/Portfolio-master/src/Assets/KartikPruthi_Resume_Main.pdf
 //"https://github.com/kartik771/Kartik-Portfolio/raw/140944a0d30e63ce874f4b26da828e61eb5cc4b2/Portfolio-master/src/Assets/KartikPruthi_Resume_Main.pdf"
//" https://raw.githubusercontent.com/kartik771/Kartik-Portfolio/140944a0d30e63ce874f4b26da828e61eb5cc4b2/Portfolio-master/src/Assets/KartikPruthi_Resume_Main.pdf"
"https://raw.githubusercontent.com/kartik771/Kartik-Portfolio/140944a0d30e63ce874f4b26da828e61eb5cc4b2/Portfolio-master/src/Assets/KartikPruthi_Resume_Main.pdf"
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
