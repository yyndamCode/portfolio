import Link from "next/link";
function _notFound() {
    return (
        <main className="not-found">
            <h1 className="text-3xl font-semibold">
                This page could not be found :(
            </h1>
            <Link
                href="/"
                className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
            >
                Go back home
            </Link>

        </main>
    );
}

export default _notFound;
