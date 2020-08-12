import Head from "next/head";
import React, { Component } from "react";
import Swal from "sweetalert2";

import Router from "next/router";
import { Carousel } from "react-responsive-carousel";

class HappyBirthday_En extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      agreement: false,
    };
  }

  componentDidMount = async () => {
    if (!sessionStorage.getItem("token")) {
      console.error("You don't have enough permissions");
      Router.push("/freetimeideas");
    } else {
      this.setState({ loading: false });
    }
  };

  confirmationMessage() {
    Swal.fire({
      title: "Are you sure?",
      text:
        "From the horns no one is saved, except you when you are with me my love :3",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmo!",
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          "Yo, Johao confirmo tú confirmación! :D jajaj",
          "I'll get ready for you, I feel it's you, you're the woman I want in my life.",
          "success"
        ).then(
          () =>
            (window.location.href =
              "https://www.youtube.com/watch?v=Q9lVp9AOjRw")
        );
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="w-full h-full py-32 flex flex-col items-center justify-center">
          <img
            className="w-32 h-32"
            id="loading"
            alt="loading"
            src="/freetimeideas/vimhash.webp"
          />
          <h1>loading...</h1>
        </div>
      );
    }

    return (
      <div
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover"
        style={{
          backgroundImage: `url("/freetimeideas/happy-birthday-background.jpg")`,
        }}
      >
        <Head>
          <title>Happy Birthday</title>
        </Head>
        <div className="flex xl:flex-row lg:flex-row flex-col">
          {this.state.agreement ? (
            <div className="flex flex-col w-full items-center justify-center">
              <div className="bg-white py-3 px-3 my-3 mx-3 rounded-lg bg-opacity-50 border-2">
                <h1 className="text-center font-bold uppercase">
                  Agreement between you and I :3
                </h1>
                <p className="text-justify">
                  I need to be close to someone to have happiness and joy, you
                  are that someone I feel happy with. I would like us to be
                  closer and for that to be possible we must come to an
                  agreement. I know I need to change but in order to change,
                  that decision must be mine. If I change, just as you think I
                  should change, it will build a wall between us and I will not
                  be happy with myself. As for who obeys who, I don't want
                  anyone to manage my actions, and I will do my best not to
                  manage your life. I don't need you to hurt me with words or
                  make jokes at my expense. I know that you have special
                  feelings about everything, and I want you to tell me
                  everything you feel, everything you hope and everything you
                  want. I will try to listen to your feelings, your wants and
                  your needs, and at the same time I will try to let you know
                  that I am listening. I will try to let you know when I am able
                  to do everything that you expect or want me to do. I will try
                  to tell you why I can't do it, without feeling guilty or
                  angry. I will try to give you tenderness when we are together
                  even in those moments when something hurts us. I will try to
                  make it possible for you to do your own thing, without putting
                  limits on what you feel trapped in. Whenever it is possible to
                  do something together and we both want to do it, let's do it.
                  I'll try to have as much honesty with you as I can give, and
                  be that kind of person you can trust. I need to laugh with you
                  and spend time with you. When I open my heart to you and tell
                  you everything I feel, that will be many times, like giving
                  you a little newborn animal; please take this with love and
                  treat it very carefully. If these words say something that is
                  true for you too, let's make a covenant and try to make it a
                  reality.
                </p>
              </div>
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 items-center mb-2 w-42"
                onClick={() => this.confirmationMessage()}
              >
                <i className="fas fa-heart mr-2"></i>
                Confirmo para que Johao confirme :v
              </button>
              <button
                className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 items-center mb-2 w-42"
                onClick={() => Router.push("/freetimeideas/songs")}
              ></button>
            </div>
          ) : (
            <>
              <div className="flex flex-col xl:w-1/2 lg:w-1/2 w-full items-center justify-center">
                <div className="bg-white py-3 px-3 my-3 mx-3 rounded-lg bg-opacity-50 border-2">
                  <h1 className="text-center font-bold uppercase">
                    Happy Birthday Arita
                    <i className="fas fa-heartbeat icon-beat ml-2 text-red-500"></i>
                  </h1>
                  <p className="py-4">
                    I wish your birthday is as beautiful and full of love as you
                    are, your deserve only the best, and I wish that for you
                    best wishes. We need more photos Ara I almost don't have you
                    in my gallery{" "}
                    <span className="font-bold">
                      I propose a photo in every exit we have :D .
                    </span>
                    <br />I don't know what it is about you, but day by day you
                    just keep on looking all the more beautiful; and I feel like
                    I have fallen deeper and deeper in your pleasant
                    personality. I don't want to live a single day without you
                    as a part of my life.
                    <br />
                    <br />
                    <span className="font-bold">
                      Happy Birthday, my princess :3 .
                    </span>
                  </p>
                </div>
                <button
                  className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-indigo-500 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white shadow-md py-2 px-6 items-center mb-2 w-42"
                  onClick={() => this.setState({ agreement: true })}
                >
                  <i className="fas fa-heart mr-2"></i>
                  Continue here
                </button>
              </div>
              <div className="flex flex-col xl:w-1/2 lg:w-1/2 w-full">
                <div className="flex flex-wrap h-full justify-center items-center px-6">
                  <Carousel
                    infiniteLoop
                    autoPlay
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                  >
                    <div>
                      <img src="/freetimeideas/carrousel/1.jpg" />
                      {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                      <img src="/freetimeideas/carrousel/2.jpg" />
                    </div>
                    <div>
                      <img src="/freetimeideas/carrousel/3.jpg" />
                    </div>
                    <div>
                      <img src="/freetimeideas/carrousel/4.jpg" />
                    </div>
                    <div>
                      <img src="/freetimeideas/carrousel/5.jpg" />
                    </div>
                    <div>
                      <img src="/freetimeideas/carrousel/6.jpg" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default HappyBirthday_En;
