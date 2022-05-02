import * as React from "react"

const Footer = () => {
  return (
    <>
      <footer className="px-8 text-center">
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

export default Footer
