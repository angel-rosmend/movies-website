"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { TextButton } from "../../foundations/Typography";
import { useRouter } from "next/navigation";

export function PlayBtn({ id }: { id: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/${id}`)}
      variant="secondary"
      className="bg-red-45 cursor-pointer"
      size="sm"
    >
      <Play fill="#ffffff" size={24} color="#ffffff" />{" "}
      <TextButton className="text-white" size="m">
        Play Now
      </TextButton>
    </Button>
  );
}
