import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLenis } from "@/lib/useLenis";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";

function App() {
    useLenis();
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:slug" element={<ProductDetail />} />
                    </Routes>
                </main>
                <Footer />
                <Toaster position="bottom-right" />
            </BrowserRouter>
        </div>
    );
}

export default App;
