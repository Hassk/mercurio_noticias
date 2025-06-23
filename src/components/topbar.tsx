export default function TopNavbar() {
    return (
        <div className="w-full bg-teal-600 text-white text-sm">
            <nav className="container mx-auto flex justify-between items-center py-2 px-4">
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:text-gray-200">Últimas Noticias</a></li>
                    <li><a href="#" className="hover:text-gray-200">Política</a></li>
                    <li><a href="#" className="hover:text-gray-200">Actualidad</a></li>
                    <li><a href="#" className="hover:text-gray-200">Deportes</a></li>
                    <li><a href="#" className="hover:text-gray-200">Local</a></li>
                </ul>
                <ul className="flex gap-4">
                    <li><a href="#" className="hover:text-gray-200">Noticias y Denuncias</a></li>
                    <li><a href="#" className="hover:text-gray-200">Eternos</a></li>
                    <li><a href="#" className="hover:text-gray-200">Said Te Escucha</a></li>
                </ul>
            </nav>
        </div>
    );
}
