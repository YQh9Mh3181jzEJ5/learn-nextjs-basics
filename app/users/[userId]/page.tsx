import Link from "next/link";

interface Props {
  params: { userId: string };
}

export default function UserPage(props: Props) {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        UserPage {props.params.userId}
      </h1>
      <p>
        <Link href="/" className="text-blue-500 hove:text-blue-7000">
          Go Back
        </Link>
      </p>
    </>
  );
}
