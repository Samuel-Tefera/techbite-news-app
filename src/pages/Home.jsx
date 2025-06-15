import Navigation from '../components/UI/Navigation';
import SideBar from '../components/UI/SideBar';
import Footer from '../components/UI/Footer';
import NewsList from '../components/News/NewsList';

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="grid lg:grid-cols-5 sm:mt-23 mt-18">
        <div className="col-span-1">
          <SideBar />
        </div>
        <NewsList />
      </main>
      <Footer />
    </>
  );
}
