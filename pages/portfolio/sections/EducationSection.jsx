import React, { Component } from "react";
import ModalCertificate from "../components/ModalCertificate";

class EducationSection extends Component {
  render() {
    return (
      <section>
        <div className="h-auto bg-white flex lg:flex-row md:flex-row flex-col lg:px-48 md:px-24 px-4 py-12">
          <div className="lg:w-1/4 md:w-1/4 w-full">
            <h1>
              <span className="uppercase font-bold border-b-2 border-blue-500 text-2xl px-2">
                Education
              </span>
            </h1>
          </div>

          <div className="lg:w-3/4 md:w-3/4 w-full">
            <div className="py-3">
              <h3 className="font-bold text-2xl">
                Yavirac Higher Technological Institute.
              </h3>
              <p className="text-sm">
                Superior Technology in Software Development.
              </p>
            </div>

            <div className="py-3">
              <h3 className="font-bold text-2xl">Mejia National Institute</h3>
              <p className="text-sm">Bachelor of Science</p>
            </div>

            <hr />

            <div className="py-3">
              <span className="font-bold text-2xl border-b-2">Courses</span>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - JavaScript 2020: Curso desde Principiante hasta Profesional,
                2020.
                <ModalCertificate image="/portfolio/certificates/course-pic9.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Web Development Bootcamp 2020, 2020.
                <ModalCertificate image="/portfolio/certificates/course-pic7.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Node.js Crash Course, 2020.
                <ModalCertificate image="/portfolio/certificates/course-pic8.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - The complete Wordpress course - Build your own website today,
                2020.
                <ModalCertificate image="/portfolio/certificates/course-pic5.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Introducción al Desarrollo Web I, 2020.
                <ModalCertificate image="/portfolio/certificates/course-pic1.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Salud Digital, 2018.
                <ModalCertificate image="/portfolio/certificates/course-pic2.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Productividad Personal, 2017.
                <ModalCertificate image="/portfolio/certificates/course-pic3.webp" />
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Educación en Orden y Seguridad Ciudadana, 2015.
                <ModalCertificate image="/portfolio/certificates/course-pic4.webp" />
              </h3>
              <h3 className="text-sm" style={{ color: "#636363" }}>
                - Computer assembly and maintenance, 2015.
              </h3>
              <h3 className="text-sm flex" style={{ color: "#636363" }}>
                - Windows, Flash, AutoCAD, Mantenimiento, 2013.
                <ModalCertificate image="/portfolio/certificates/course-pic6.webp" />
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EducationSection;
