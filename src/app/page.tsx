"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <Input placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <Input placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>

      <Button> Create User</Button>
    </div>
  );
}
