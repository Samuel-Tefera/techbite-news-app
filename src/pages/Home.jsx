import Navigation from '../components/UI/Navigation';
import SideBar from '../components/UI/SideBar';
import Footer from '../components/UI/Footer';
import NewsList from '../components/News/NewsList';

export default function Home() {
  return (
    <>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <Navigation />
      </header>
      <main className="grid lg:grid-cols-5 sm:mt-23 mt-16 bg-gray-50 dark:bg-gray-900">
        <div className="col-span-1 bg-white dark:bg-gray-800 shadow-sm">
          <SideBar />
        </div>
        <NewsList />
      </main>
      <Footer />
    </>
  );
}
