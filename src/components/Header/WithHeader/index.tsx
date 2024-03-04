'use client'

import { usePathname } from "next/navigation"
import React, { FC } from "react"
import { PageHeader } from ".."


interface HeaderPageProps {

}

export const WithHeader: FC<HeaderPageProps> = () => {
  const pathname = usePathname()
  const hideHeader = pathname.startsWith('/login') || pathname.startsWith('/register')

  return (
    <>
      {!hideHeader && <PageHeader/>}
    </>
  )
}
