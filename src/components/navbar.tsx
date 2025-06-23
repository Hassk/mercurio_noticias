import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center gap-4 w-1/3">
                <Button className="bg-neutral-200 text-black hover:bg-teal-700 ml-1">
                    <p>Menú</p>
                </Button>
            </div>
            <div className="flex justify-center items-center w-1/3 relative">
                <Link href="/">
                    <Image 
                        src="/mercuriologo.png" 
                        alt="Mercurio Noticias" 
                        width={140} 
                        height={140} 
                        className="mx-auto"
                    />                
                </Link>
            </div>
            <div className="w-1/3">
                {/* Espacio para contenido adicional o ajustar el diseño */}
            </div>
        </nav>
    );
}
