import Link from 'next/link';

export default function Header(){
    return(
        <header className="flex px-2 bg-violet-400 text-white">
            <div className="flex items-center justify-between w-full">
            <div>Meu Site</div>

            <nav>
                <ul className="flex items-center justify-center gap-2">
                    <Link href={"/"}>Home</Link>
                    <Link href={"produtos"}>Produto</Link>
                </ul>
            </nav>
            </div>
        </header>
    )
}