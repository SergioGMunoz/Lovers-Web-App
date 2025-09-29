const Title = ({ message }) => {
  return (
    <section className="col-section">
      <h1>{message}</h1>
      <button className="btn-primary btn-sign-up">Crear cuenta</button>
    </section>
  )
}

export default Title