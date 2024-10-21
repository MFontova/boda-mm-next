"use client"

import withAuth from "./shared/components/withAuth";

function Home() {
  return (
    <h1>Benvigut/da a la nostra boda!</h1>
  );
}

export default withAuth(Home)