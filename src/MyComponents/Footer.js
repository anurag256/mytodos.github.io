import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position : "absolute",
        top : "100vh",
        width : "100%"
    }
    return (
        <footer className="bg-dark text-light" style={footerstyle}>
            <p className="text-center">
                Copyright &copy; MyTodoList.com
            </p>
        </footer>
    )
}
