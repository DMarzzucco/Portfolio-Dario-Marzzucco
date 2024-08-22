"use client";
import { Coms_home } from "./components";

export default function Home() {
  const In = new Coms_home()
  return (
    <main>
      <In.header_page/>

      <In.HomeCart />

      <In.skills_windows />

      <In.architecture_soft />

      <In.solid_windows />

      <In.habs_windows />

      <In.last_works />
    </main>
  );
}