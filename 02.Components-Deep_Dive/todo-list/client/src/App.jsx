import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoList from './components/TodoList'
function App() {

    return (
        <>
            {/* <TodoList /> */}

            <Header />

            {/* <!-- Main content --> */}
            <main className="main">
                <TodoList />
            </main>

            <Footer />
        </>
    )
}

export default App
