function Content() {
  return (
    <>
      {/* subject */}
      <div id="subject">
        <header>
          <h1>Web</h1>
          Hello web!
        </header>
      </div>

      {/* toc */}
      <div id="TOC">
        <nav>
          <ol></ol>
        </nav>
      </div>

      {/* control */}
      <div id="control">
        <ul>
          <li>
            <a href="#">create</a>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
      </div>

      {/* content */}
      <div id="content"></div>
      <style jsx>{``}</style>
    </>
  );
}

export default Content;
