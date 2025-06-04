import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MaestrosPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Titulo de la pagina</h1>
      <p className="text-muted-foreground mb-6">
        Contenido de la página
      </p>
      <Button className="mt-4">
        <Link href='/'>Volver</Link>
      </Button>
    </main>
  );
}