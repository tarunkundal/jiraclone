import React from 'react'

interface SignInLayoutProps {
    children: React.ReactNode
}

const SignInLayout = ({ children }: SignInLayoutProps) => {
    return (
        <div className='flex flex-col' >
            <nav className='bg-red-500 h-8' >
                <p>Navbar</p>
            </nav>
            {children}
        </div>
    )
}

export default SignInLayout