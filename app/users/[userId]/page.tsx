import { users } from "@/app/lib";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { userId: string };
}

export default function UserPage(props: Props) {
  const user = users[Number(props.params.userId)];
  if (user === undefined) {
    notFound();
  }
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">{user.name}</h1>
      <p>{user.prof}</p>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 hove:text-blue-7000">
          Go Back
        </Link>
      </p>
    </>
  );
}
