"use client";
import { Coms_home } from "./components";

export default function Home() {
  const In = new Coms_home()
  return (
    <main>
      <In.HomeCart />

      <In.habs_windows />

      <In.skills_windows />

      <In.last_works />
    </main>
  );
}