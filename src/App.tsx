import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { TryFree } from "./components/tryFree";
import { Home } from "./pages/home";

function App() {
    return (
        <>
            <Header />
            <Home />
            <TryFree />
            <Footer />
        </>
    );
}

export default App;
