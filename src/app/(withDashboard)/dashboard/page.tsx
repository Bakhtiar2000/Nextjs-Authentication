import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <p className="text-xl text-center mt-5">
            Email: {session?.user?.email}
          </p>
          <Image
            className="rounded-full border-2 border-accent mx-auto mt-10"
            width={80}
            height={80}
            src={
              session?.user?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
            alt={session?.user?.name as string}
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
