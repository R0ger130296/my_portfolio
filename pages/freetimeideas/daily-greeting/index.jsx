import Head from "next/head";
import React, { Component } from "react";
import Swal from "sweetalert2";
import { db } from "../../../services/_firebase-freetimeideas";
import Router from "next/router";
import moment from "moment";

import { user_authentication } from "../../../services/_webService";

class DailyGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      messages: [
        "TE QUIERO, sin pensarlo, sin medidas, sin cordura, sin preguntas, sin lógica, sin cuidado. Así te quiero, así tan simple como lo escribo. Tan simple como lo siento...",
        "Me dejas sin palabras, no te basta con eso y me robas el aliento.",
        "La sonrisa es mía, pero el motivo eres tú...",
        "De tanto que sueño contigo, no sé si te tengo en mi mente, en mi vida o en mi corazón...",
        "Quédate en silencio. Quédate conmigo. Aunque te vayas...",
        "TE QUIERO así porque una vez me viste temblar y en vez de taparme, te desnudaste conmigo.",
        "Mostrarte celos es confesarte que me importas de verdad.",
        "Anoche te soñe y amanecí...",
        "Me enamoré de ti …, eres la única que entró en mi corazón, pensamientos y contigo estoy dispuesto a pasar el resto de mis días…",
        "No es necesario que tenga que explicar porque te quiero, me bastas solo tú para que trasmitas ese sentimiento que me llena de alegría porque soy correspondido en mis sentimientos",
        "Con una dulce mirada y unas tiernas palabras puedes hacer que el día más difícil de mi vida se convierta en el más maravilloso. Te quiero mucho mi linda princesa.",
        "(¯`v´¯) No olvides que  tú ocupas un lugar muy especial en mi Pum Pum.  (¸.·´ (¸.·´ (¸.·¨¯`♥ T.Q.M Mi Princesa ^^",
        "Te iba a dar mi corazón, pero ya me lo robaste.",
        "Sólo con ver tu nombre me haces suspirar, imagínate cuando te veo, me aceleras... el... corazón jejeje",
        "En mi mundo sólo existimos tú, yo y el gran amor que nos une, ammm y también extraterrestres :v jaja",
        "No me interesa saber si en el mundo existe alguien más bella que tú, me basta con saber que tengo tu amor y para mí siempre serás la más hermosa de todo el planeta",
        "I like you baby, I love you so much, you are my angel in the night, I want future with you... do not forget little girl.",
        "Tengo celos, me enojo en silencio, me preocupo y todo es sólo porque me importas.",
        "Tu amor me inspira, tu ternura me conmueve y tus besos me enloquecen. ^^",
        "La lógica de este programa fue inspirado y pensando en ti",
        "Mi ordenador ya no ordena, lo haz desiquilibrado, mi pequeña war machine se puso celosa :v jaja",
        "Estas como para hacerte el café por las mañanas, caricias por la tarde y el amor por las noches.",
      ],
      welcome: "",
      day_msm: "Aún trabajo en esto, no me sale lo que quiero :v jaja",
    };
  }

  componentDidMount = async () => {
    let hora = moment().format("H");

    if (
      user_authentication(
        sessionStorage.getItem("secret_token"),
        "freetimeideas"
      ) !== false
    ) {
      if (hora >= 22 && hora <= 6) {
        this.setState({
          welcome: "Ya duerme Amor, ya es de noche",
          loading: false,
        });
      } else if (hora >= 6 && hora < 12) {
        this.setState({ welcome: "Buenos días Amor ^^", loading: false });
      } else if (hora >= 12 && hora < 19) {
        this.setState({ welcome: "Buenas tardes Amorcito :3", loading: false });
      } else if (hora >= 19 && hora <= 22) {
        this.setState({ welcome: "Buenas noches Princesa <3", loading: false });
      }
    }
  };

  render() {
    const { welcome, day_msm } = this.state;

    if (this.state.loading) {
      return (
        <div className="w-full h-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/vimhash.webp"
          />
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover"
        style={{
          backgroundImage: `url("/freetimeideas/daily-greeting.webp")`,
        }}
      >
        <Head>
          <title>Daily Greeting</title>
        </Head>
        <div>
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50 text-2xl w-64 text-center">
            {/* Hello my sweetheart ^^ */}
            {welcome}
          </h1>
        </div>
        <div>
          <h1 className="uppercase font-bold py-1 px-2 my-2 bg-gray-300 bg-opacity-50 text-xl w-64 text-center">
            {day_msm}
          </h1>
        </div>
        <div className="flex flex-col fixed bottom-0 items-center text-white">
          <button
            className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center mb-2"
            onClick={() => Router.push("/freetimeideas/dashboard")}
          >
            <i className="fas fa-undo text-sm mr-2"></i>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default DailyGreeting;
