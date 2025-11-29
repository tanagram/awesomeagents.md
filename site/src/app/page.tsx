import { ContentCard } from "@/components/ContentCard";
import { TitleCard } from "@/components/TitleCard";

export default function Home() {
  return (
    <div className="grid min-h-screen justify-items-center">
      <TitleCard />
      <ContentCard
        title="Elixir"
        description="Elixir is a functional, concurrent programming language built on the Erlang VM, designed for highly scalable and fault-tolerant systems. It offers a modern, expressive syntax, making it well-suited for web services, real-time applications, and distributed architectures."
        content={
          <div>
            <h1>Basics</h1>{" "}
            <ol>
              <li>Hello world</li>
            </ol>
          </div>
        }
        pageNumber={1}
      />
    </div>
  );
}
