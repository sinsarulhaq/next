import Link from 'next/link'
import { useRouter } from 'next/router'

function Home(){

    const router = useRouter();
    const handleClick = () => {
        router.push('/products');
    }

    return(
        <>
        <h1>home</h1>
        <Link href={'/blog'}>
        <a>blog</a>
        </Link>
        <Link href={'/products'}>
            <a>products</a>
        </Link>
        <button onClick={handleClick}>
            place order
        </button>
        </>
    ) 
}

export default Home;