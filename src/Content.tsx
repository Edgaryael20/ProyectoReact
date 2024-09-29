import ChatSelector from "./ChatSelector";
import "./App.css";
import "./Content.css"


type Props = {
  onSelectLeftChat: (path: string, title: string) => void;
 
};

function Content({ onSelectLeftChat}: Props) {
  return (
    <div className="content">
      <div className="header">
        <center><h3 className="texto" >Open chat</h3></center>
      </div>
      <div className="right">
        <div className="right">
          <center><h4 className="texto">Elige una conversación de las comunidades disponibles</h4></center>

          

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/cjki4-6iaaa-aaaar-a5aaa-cai/channel/239976284165262272742552999109923121350/36"
            title="Agricultura"
          />
        </div>

        
       
      </div>
      <div className="footer">
        <h3></h3>
      </div>
    </div>


  );
}

export default Content;
