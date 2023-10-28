"use client";
import { Button, Image, Link } from "@nextui-org/react";

export default function Custom404() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-blue-300`}
    >
      <div className="w-screen flex flex-col items-center gap-8">
        <div className="flex flex-col  gap-4  items-center ">
          <h1 className="flex flex-col text-[3b82f6] font-semibold items-center  text-2xl lg:text-2xl">
            Not Found Page
          </h1>
          <Button href="/" as={Link} color="warning" variant="solid">
            Go Back Map
          </Button>
        </div>
        <Image
          width={260}
          alt="Not Found Sun Image"
          src="/images/not-found-sun.png"
        />
      </div>
    </main>
  );
}
