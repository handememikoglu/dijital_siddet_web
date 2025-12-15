import Link from "next/link";

export default function QuikExitButton() {
    return (
        <Link href="https://www.google.com" rel="noopener noreferrer" className="bg-red-500 text-white p-2 rounded-lg" >
            Hızlı Çıkış
        </Link>
    )
}