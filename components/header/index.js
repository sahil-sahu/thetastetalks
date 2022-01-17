import Link from 'next/link'

function Header() {
  return (

    <header>
        <div className="join-us">
            It's free platform. Want to be a part of it ? 
            <Link href={`/join-us`} >
                <a> click here </a>
            </Link>
        </div>
    </header>
      
  )
}

export default Header;
