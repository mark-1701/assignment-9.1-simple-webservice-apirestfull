import Card from './components/Card';

function App() {
  return (
    <>
      <div className="cards">
        <Card title={'WEB SERVICE'} image_uri={'/src/assets/icons/web_dark.png'} url={'http://127.0.0.1:8000/user'} />
        <Card title={'API REST'} image_uri={'/src/assets/icons/api_dark.png'} url={'/apirest'} />
      </div>
    </>
  );
}

export default App;
