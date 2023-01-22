import {useTheme} from 'next-themes'
import {useState, useEffect} from 'react'

function Header() {
    
    return(
        <div className="flex justify-between px-12 py-4">
            <p><strong>Bassam</strong>Ahmed</p>
            <div className="flex justify-between">
                <a className="px-3 no-underline hover:overline " href="/home">Home</a>
                <a className="px-3 no-underline hover:overline " href="/about">About</a>
                <a className="px-3 no-underline hover:overline " href="/projects">Projects</a>
                <a className="px-3 no-underline hover:overline " href="/experience">Experience</a>
                <a className="px-3 no-underline hover:overline " href="/contact">Contact</a>
            </div>
            <button >Toggle</button>
        </div>

    )
}

export default Header