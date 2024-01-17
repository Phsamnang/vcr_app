'use client'
import styles from './page.module.css'
import useFetchCategoryId from "@/libs/hooks/fetch-category-id";


export default function Home() {
  const {data}=useFetchCategoryId(1)
  console.log(data)
  return (
    <main className={styles.main}>

    </main>
  )
}
