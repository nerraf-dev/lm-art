export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="pt-4 px-2">
            <p className="">©Copyright {year} LM Art</p>
            <p className="text-sm">Made with 💙 by nerraf.dev</p>
        </footer>
    );
}