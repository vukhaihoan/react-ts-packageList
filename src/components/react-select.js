import React from "react";
import { Helmet } from "react-helmet";

export default function Test() {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      ...
    </div>
  );
}
