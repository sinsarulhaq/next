import Link from 'next/link'

function Home(){
    return(
        <>
        <h1>home</h1>
        <Link href={'/blog'}>
        <a>blog</a>
        </Link>
        <Link href={'/products'}>
            <a>products</a>
        </Link>
        </>
    ) 
}

export default Home;