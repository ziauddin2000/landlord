"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvestmentEmptyPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/property");
  }, [router]);

  return null;
}
