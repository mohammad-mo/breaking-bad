const Footer = () => {
  const footerYear = new Date().getFullYear()

  return (
    <footer>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
