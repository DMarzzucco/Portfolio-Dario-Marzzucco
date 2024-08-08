import Coms from "@/components/common/Common";

const In = new Coms()
export default function Home() {
  return (
    <main className="Home">
      <section className="flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
      <section className="flex justify-center items-center h-screen">
        <div className="p-4 bg-slate-300 text-slate-800 font-bold">
          <h1>FullStack Developer</h1>
        </div>
      </section>
    </main>
  );
}
