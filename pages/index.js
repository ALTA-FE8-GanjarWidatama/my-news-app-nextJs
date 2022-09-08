import axios from "axios";
import React, { useEffect } from "react";
import NavBar from "../component/NavBar";
import Cards from "../component/Cards";

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://inshorts.deta.dev/news?category=technology`
  );
  const dateTime = response.data.data;
  return {
    props: {
      dateTime: dateTime,
      title: title,
    },
  };
};

const ServerSideRendering = ({ dateTime }) => {
  console.log("date time: ", dateTime);
  return (
    <div>
      <p>Ini Server Side Rendering</p>

      {dateTime.map((item, index) => {
        return (
          <>
            <div key={index}>
              <Cards />
              {item.title}
              {item.date}
              {item.content}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ServerSideRendering;
