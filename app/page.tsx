import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Users</h1>
      <ul className="list-disc ml-4">
        <li>
          <Link href="/users/0" className="text-blue-500 hove:text-blue-7000">
            User0
          </Link>
        </li>
        <li>
          <Link href="/users/1" className="text-blue-500 hove:text-blue-7000">
            User1
          </Link>
        </li>
      </ul>
    </>
  );
}
