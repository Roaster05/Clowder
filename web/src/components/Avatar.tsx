"use client";

import React from "react";
import { useWallet } from "@/hooks/WalletConnectProvider";
import Image from "next/image";

function generateAvatar(walletAddress: string): string {
  const baseUrl = "https://api.dicebear.com/6.x/identicon/svg";
  return `${baseUrl}?seed=${encodeURIComponent(walletAddress)}`;
}

const Avatar = () => {
  const { address } = useWallet();

  if (!address) {
    return <p>Please connect your wallet to see your avatar.</p>;
  }

  const avatarUrl = generateAvatar(address);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={avatarUrl}
        alt="User Avatar"
        className="w-10 h-10 rounded-full border shadow-lg"
        width={35}
        height={35}
      />
    </div>
  );
};

export default Avatar;
