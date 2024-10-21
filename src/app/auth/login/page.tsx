"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const res = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,  // Strapi expects 'identifier' for the email or username field
        password: password,
      }),
    });

    const data = await res.json();

    if (data.jwt) {
      // Login successful, store JWT in localStorage
      localStorage.setItem('jwt', data.jwt);
      router.push('/');  // Redirect to dashboard or another protected route
    } else {
      // Handle error
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <main className="h-full flex flex-col justify-center">
      <div className="flex flex-col items-center p-10 border max-w-xl mx-auto my-auto rounded-lg shadow-md bg-white gap-5">
        <h1 className="text-3xl text-center">Benvinguts a la nostra boda - Mariona i Marc</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="border rounded-full bg-[#c8b79f] text-white hover:shadow-md max-w-fit px-3">Inicia sessió</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}