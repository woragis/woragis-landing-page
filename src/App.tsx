import { Link } from "react-router-dom";
function App() {
  const links = [
    { linkId: "top", title: "Back to Top" },
    { linkId: "projects", title: "Projects" },
    { linkId: "about-me", title: "About Me" },
    { linkId: "contact", title: "Contact" },
  ];
  const sideButtonLinks = links.map(({ linkId, title }) => {
    return (
      <button className="side-nav">
        <Link to={"#" + linkId}>{title}</Link>
      </button>
    );
  });
  return (
    <>
      <article className="side-nav">{sideButtonLinks}</article>
      <h1 id="top">Landing Page</h1>
      <section id="projects">none</section>
      <section id="about-me">
        <h1>Jezreel de Andrade</h1>
        <p className="on-hover">origem do meu nome</p>
        <p>Descricao da minha trajetoria como dev</p>
      </section>
      <section id="contact">
        <h3>Essa parte /e bom ficar meio pro final</h3>
        <p>
          nao precisa de footer, ja que redes sociais ficam na parte de contato
        </p>
      </section>
      <footer>
        <small>&copy;2023 - Jezreel de Andrade</small>
      </footer>
    </>
  );
}

export default App;
