import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect, useState } from 'react'

export default function Home ({ repositories, date }) {
  return ( 
  <>
  <h1>{date}</h1>
    <ul>
      {repositories.map((item) => {
        return (
          <li key={item}>
            {item}
          </li>
        )
      })}
    </ul>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/diego3g/repos')

  const data = await response.json()
  const repositoryNames = data.map((item) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toDateString(), 
    },
    revalidate: 5,
  }
}