import Head from "next/head";
import React, { Component } from "react";
import Swal from "sweetalert2";

import Router from "next/router";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("/freetimeideas/songs/the_invisible_kid.png")`,
        }}
      >
        <Head>
          <title>Songs Menu</title>
        </Head>
        <div className="flex max-w-lg">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="bg-white py-3 px-3 my-3 mx-3 rounded-lg bg-opacity-50 border-2">
              <h1 className="text-center font-bold uppercase">
                The Invisible Kid
              </h1>
              <p className="text-justify py-2">
                I spend my time looking like someone who looks at a star
                thinking that life is nothing if you're not in it, it's a shame,
                that I don't think the same about me, if you don't even know
                that my poor heart is waiting for you, when I leave I'm left
                gawking at how you're moving away from me, I'm jealous of the
                breeze that touches your ear, If I see you with another guy I
                die, invisible to you but I can not approach, damn shyness that
                prevents me from saying what I feel, I have a knot that ties me
                inside, I look in the mirror and only see a coward without guts,
                to tell the face that I love you at times.
              </p>

              <p className="text-justify py-2">
                You know I'm not what you expected and maybe I do not offer
                anything that someone else could not give you, but I look very
                silly and it's driving me crazy that it's too late to kiss you,
                and I imagine how it will be, the day I can touch you.
              </p>

              <p className="text-justify py-2">
                Wishing that someday I look like I want, if your eyes and mine
                cross, I have enough because I will be much happier than most,
                you are what encourages me to get up every morning, if I get
                home I want to lie in bed to see you again in my dream I can hug
                you, if I wake up is a return to start.
              </p>

              <p className="text-justify py-2">
                I know that I will never know the touch of your lips, I don't
                want to be your boyfriend but the captain of this ship, that
                sailed under storm and shipwrecked on the most beautiful and
                sunny coast of your heart.
              </p>

              <p className="text-justify py-2">
                I am invisible to others but it is not forbidden to dream.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Songs;
