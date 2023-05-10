import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';


import SearchForm from '../components/SearchForm';

export default function Home() {
  const [data,setData] = React.useState();
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub Search Repository</title>
        <meta name="description" content="GitHub Search Repository - Jan Sporek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hmpgDiv}>   
          <h1>GitHub Search Repository</h1>  

          <SearchForm onFinish={(data) => {
            setData(data);
            console.log("jazyk: ", data)
          }} />
        </div> 
        <div className={styles.repWrap}>
        {data && data.map(post => (
          <div key={post.id} className={styles.repDisplay}>
              <div><h2><a href={post.url} target="_blank">{post.name}</a></h2></div>
              <div><p>{post.description.substring(0, 250)}</p></div>
              <div><a href={post.owner.url} target="_blank"><strong>Uzivatel:</strong> <span>{post.owner.login}</span></a></div>
              <div><strong>Pocet hvezd:</strong> {post.stargazerCount}</div>
              <div><strong>Programovací jazyk:</strong> {post.primaryLanguage?.name}</div>
          </div>))}
          </div>
      </main>
    </div>
  )
}
