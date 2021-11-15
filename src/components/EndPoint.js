import React, { useEffect, useState } from "react";

import { postResponse } from "../service/APICall";

const EndPoint = ({ token }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    const info = async () => {
      const postData = await postResponse(token);
      const data = await postData.json();
      const getData = data.data.posts;
      console.log(getData);
      setState(getData);
    };

    info();
  }, [token]);

  console.log(state);

  return <div></div>;
};

export default EndPoint;
