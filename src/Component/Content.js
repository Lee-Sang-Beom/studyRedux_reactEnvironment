function Content() {
  const onClickEvent = (e) => {
    e.preventDefault();
  };

  const returnSubject = () => {
    return (
      <header>
        <h1>Web</h1>
        <p>Hello web!</p>
      </header>
    );
  };

  const returnTOC = () => {
    return (
      <nav>
        <ol>
          <li>
            <a href="/" onClick={onClickEvent}>
              HTML
            </a>
          </li>
          <li>
            <a href="/" onClick={onClickEvent}>
              CSS
            </a>
          </li>
        </ol>
      </nav>
    );
  };

  const returnControl = () => {
    return (
      <ul>
        <li>
          <a href="/" onClick={onClickEvent}>
            create
          </a>
        </li>
        <li>
          <input type="button" value="delete" />
        </li>
      </ul>
    );
  };

  const returnContent = () => {
    return (
      <article>
        <h2>HTML</h2>
        HTML is...
      </article>
    );
  };

  return (
    <div className="container">
      {/* subject */}
      <div id="subject">{returnSubject()}</div>

      {/* toc */}
      <div id="TOC">{returnTOC()}</div>

      {/* control */}
      <div id="control">{returnControl()}</div>

      {/* content */}
      <div id="content">{returnContent()}</div>
    </div>
  );
}

export default Content;
