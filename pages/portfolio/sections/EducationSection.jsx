import React from "react";
import ModalCertificate from "../components/ModalCertificate";

export default function EducationSection() {
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
            <h3 className="font-bold text-2xl">Languages</h3>
            <p className="text-sm">- Spanish: Native</p>
            <p className="text-sm">- English: B1.1</p>
            <p className="text-sm">- German: Basic</p>
          </div>

          <hr />

          <div className="py-3">
            <span className="font-bold text-2xl border-b-2">Courses</span>
            <h3 className="text-sm flex text-gray-600">
              - Protege tu Negocio: Ciberseguridad en el trabajo
              <ModalCertificate image="/portfolio/certificates/course-pic10.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - JavaScript 2020: Curso desde Principiante hasta Profesional,
              2020.
              <ModalCertificate image="/portfolio/certificates/course-pic9.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Web Development Bootcamp 2020, 2020.
              <ModalCertificate image="/portfolio/certificates/course-pic7.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Node.js Crash Course, 2020.
              <ModalCertificate image="/portfolio/certificates/course-pic8.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - The complete Wordpress course - Build your own website today,
              2020.
              <ModalCertificate image="/portfolio/certificates/course-pic5.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Introducción al Desarrollo Web I, 2020.
              <ModalCertificate image="/portfolio/certificates/course-pic1.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Salud Digital, 2018.
              <ModalCertificate image="/portfolio/certificates/course-pic2.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Productividad Personal, 2017.
              <ModalCertificate image="/portfolio/certificates/course-pic3.webp" />
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Educación en Orden y Seguridad Ciudadana, 2015.
              <ModalCertificate image="/portfolio/certificates/course-pic4.webp" />
            </h3>
            <h3 className="text-sm text-gray-600">
              - Computer assembly and maintenance, 2015.
            </h3>
            <h3 className="text-sm flex text-gray-600">
              - Windows, Flash, AutoCAD, Mantenimiento, 2013.
              <ModalCertificate image="/portfolio/certificates/course-pic6.webp" />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
