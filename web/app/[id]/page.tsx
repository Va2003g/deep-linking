import { useSearchParams } from "next/navigation";

export default function DynamicRoute() {
    const id = useSearchParams();
    console.log(id);
    return (
      <div>
        <h1>Dynamic Route</h1>
        <p>{id}</p>
      </div>
    );
  }
  