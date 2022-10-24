
function Header() {
  return (
    <>
        <div className="header_wrap">
            <div className="header">
                <h1>MyWeb</h1>
            </div>
        </div>
        <style jsx>{`
            
            .header_wrap{
                width: 100%;
                height: 60px;
                background-color: black;
            }

            .header{
                color: #ffffff;
                margin-left : 1rem;
                line-height : 60px;
            }

            h1{
                font-size : 1.8rem;
                font-weight : 500;
            }
        `}</style>
    </>
  );
}

export default Header;
