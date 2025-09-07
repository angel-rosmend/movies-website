"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { TextButton } from "../../foundations/Typography";
import { useRouter } from "next/navigation";
import { ROUTES_PATH } from "@/lib/routes";

export function PlayBtn({ id }: { id: number }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(ROUTES_PATH.details(id))}
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
