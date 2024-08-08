import Coms from "@/components/common/Common";

const In = new Coms()
export default function Home() {
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
    </main>
  );
}
