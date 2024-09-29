import "./Content.css"

type Props = {
  onSelect: (path: string, title: string) => void;
  path: string;
  title: string;
};

function ChatSelector({ path, title, onSelect }: Props) {
  return (
    <p>
      <center><button className="btn2" onClick={() => onSelect(path, title)}>{title}</button></center>
    </p>
  );
}

export default ChatSelector;
