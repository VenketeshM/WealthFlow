import { AuthForm } from "@/components/auth-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-50 to-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary-600">Wealth Flow</h1>
          </Link>
          <p className="mt-2 text-gray-600">Your personal finance management platform</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
