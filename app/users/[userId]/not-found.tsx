import Link from "next/link";

export default function UserNotFoundPage() {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Error!</h1>
      <p>User not found!</p>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 hove:text-blue-7000">
          Go Back
        </Link>
      </p>
    </>
  );
}
