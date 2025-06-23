import { getAllAuthors } from "@/lib/wordpress";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nuestros redactores",
    description: "Descubre los autores de nuestro medio",
    alternates: {
        canonical: "../autores/page.tsx",
    }
}

export default async function Page() {
    const authors = await getAllAuthors();

    return (
        <section className="py-10">
        <div className="container mx-auto space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Nuestros autores</h2>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {authors.map((author: { id: number; name: string }) => (
                <li key={author.id}>
                  <Link href={`/posts/?author=${author.id}`}>
                    <span className="text-blue-600 hover:underline">{author.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      );
    }