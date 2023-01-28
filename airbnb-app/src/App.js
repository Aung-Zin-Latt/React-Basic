import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

import Joke from "./components/Joke";
import jokeData from "./components/JokesData";
import Form from "./components/Form";


export default function App () {
    
    const [messages, setMessages] = React.useState(["a", "b", "c"])

  const cards = data.map((item) => {
      return (
            <Card
                key={item.id}
                item={item}
                // {...item}  //Spread Objects a props
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSports={item.openSports}
            />
      )
  })

  const jokeElements = jokeData.map(myjoke => {
    return <Joke
                key={myjoke.setup}
                setup={myjoke.setup} 
                punchline={myjoke.punchline}
           />
  });

  return (
        <div>
            <Navbar
                img="./images/airbnb-logo.png"
            />
            
            <Hero 
                name="Online Experiences"
                content="Join unique interactive activities led 
                by one-of-a-kind hosts-all without leaving home."
            />
            <section className="cards--list">
                {cards}
            </section>
            {
                messages.length === 0 ?
                <h1>You're all catch up!</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
            }
            <hr></hr>
            {jokeElements}
            <Form />
        </div>  
  )

}