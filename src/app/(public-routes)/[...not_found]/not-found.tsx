"use client"
import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const NotFoundPage: FC = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-3 mt-3">
        A página que voce está procurando não está disponivel.
      </p>
      <Button onClick={() => router.back()}>Voltar</Button>
    </div>
  )
}

export default NotFoundPage
