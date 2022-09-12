import "../styles/globals.css";

export default function _app({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);

    return getLayout(<Component {...pageProps} />);
}

// import "../styles/globals.css";
// import Layout from "../components/Layout";

// function MyApp({ Component, pageProps }) {
//     return (
//         <Layout>
//             <Component {...pageProps} />
//         </Layout>
//     );
// }

// export default MyApp;

// <div class="flex min-h-screen items-center justify-center bg-pink-100">
//    <div class="h-40 w-40 bg-pink-600 rounded-2xl shadow-xl shadow-rose-500 "></div>
//   <input class='file:bg-blue-400 file:border-transparent file:rounded-full file:text-blue-700 file:font-semibold' type="file" name="" id="">
// </div>
