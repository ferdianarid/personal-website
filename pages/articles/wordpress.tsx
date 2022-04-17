import ArticlesLayouts from 'layouts/ArticlesLayouts'
import HeaderLayouts from 'layouts/HeaderLayouts'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Text from 'components/atoms/Text'

const Wordpress: NextPage = () => {
    return (
        <React.Fragment>
            {/* Meta and SEO Concern */}
            <Head>
                <title>Ferdian's - Articles</title>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="homepage ferdian" />
                <meta property="og:title" content="homepage" key="title" />
                <meta name="description" content="homepage ferdian" />
            </Head>
            <ArticlesLayouts>
                <div className="mb-8 px-0 md:px-20">
                    <h1 className="font-bold text-4xl text-white">Wordpress Localhost</h1>
                    <Text>Menginstall, edit dan preview post wordpress di Lokal Komputer (Localhost).</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/wordpress.png" className='w-full' width={800} height={230} />
                    </div>
                    <h1 className="font-bold text-white text-xl">Latar Belakang</h1>
                    <Text>Wordpress merupakan sebuah Content Management System (CMS) yang banyak digunakan untuk mengembangkan situs web. Mulai situs Personal Website, Blog, Online Store, hingga Web Korporasi dan Pemerintahan.</Text>

                    <div className="my-8">
                        <h1 className="font-bold text-white text-xl">Langkah-langkah Installasi</h1>
                        <Text>Pertama-tama, kita bisa install package wordpress yang sudah di sediakan di website resmi nya https://wordpress.org/. Dan akan tampil seperti gambar berikut.</Text>
                        <div className="my-10">
                            <Image src="/images/wordpress/wordress-main.png" className='w-full' width={800} height={430} />
                        </div>
                        <Text>Di halaman tersebut, langsung saja klik “Get Wordpress” dan otomatis wordpress akan terdownload.</Text>

                        <Text>Langkah berikutnya, kita nyalakan XAMPP karena disini kita membutuhkan Apache Web Server dan MySQL untuk DBMS nya.</Text>

                        <Text>Kalau belum punya Aplikasi nya, kita bisa download di web https://www.apachefriends.org/download.html. Tinggal pilih sesuai sistem operasi yang kita pakai. Lalu install dengan mengikuti perintah.</Text>
                    </div>

                    <div className="my-10">
                        <Image src="/images/wordpress/xampp.png" className='w-full' width={800} height={460} />
                    </div>
                    <Text>Kita nyalakan dengan klik Start dan otomatis kalau sukses, akan keluar indikator di port berapa sistem nya berjalan. Disini Apache berjalan di port 9999 karena saya custom, default port Apache di port 8080, dan MySQL di port 3306</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/start-xampp.png" className='w-full' width={800} height={460} />
                    </div>
                    <Text>Kalau sudah, file package wordpress yang sudah kita download sebelumnya, kita pindahkan ke folder tempat dimana Xampp kita terinstall, yaitu di folder C:\xampp\htdocs.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/htdocs.jpeg" className='w-full' width={800} height={460} />
                    </div>
                    <Text>Kalau sudah, kita akses di browser dengan perintah https://localhost/dashboard/. akan tampil seperti berikut.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/server-start.png" className='w-full' width={800} height={460} />
                    </div>
                    <Text>Dan untuk mengakses folder wordpress yang kita extract di folder htdocs tadi, kita ketik https://localhost/wordpress/. Dan tampillah halaman wordpress nya. Kita disuruh untuk memilih bahasa, disini kita pilih English.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/language.png" className='w-full' width={800} height={460} />
                    </div>
                    <Text>Dan klik lanjut, kemudian akan tampil halaman seperti ini.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/dbsetting.png" className='w-full' width={800} height={480} />
                    </div>
                    <Text>Untuk memulai wordpress nya kita harus membuat database baru. Kita bisa membuatnya di phpMyAdmin https://localhost/phpmyadmin/. Pilih “New” terus ketik nama database dan klik “Create Database”.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/phpmyadmin.png" className='w-full' width={800} height={280} />
                    </div>
                    <Text>Kalau sudah, kita tekan “Lets go” untuk melanjutkan ke halaman berikut. dan kemudian kita bisa isikan sesuai nama “database” sesuai nama database yang telah kita buat, “username” dan “password” MySQL nya.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/projectname.png" className='w-full' width={800} height={480} />
                    </div>
                    <Text>Default username nya “root”, password nya kosong, dan Database Host nya “localhost”, untuk yang table prefix nya sesuai yang kita inginkan. Lalu klik “Submit”.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/installation.png" className='w-full' width={800} height={320} />
                    </div>
                    <Text>Kita bisa langsung “Run the Installation”.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/welcome.png" className='w-full' width={800} height={480} />
                    </div>
                    <Text>Isi form sesuai nama apa yang akan kita buat. Kalau sudah, klik “Install Wordpress”. Kalau register sukses, akan diarahkan ke halaman berikut. Dan kemudian kita bisa “Login” dengan klik “Login”.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/login.jpeg" className='w-full' width={800} height={390} />
                    </div>
                    <Text>Setelah klik “Login”, kita bisa isi username dan password kita.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/login2.png" className='w-full' width={800} height={390} />
                    </div>
                    <Text>Jika sudah terisi, kita langsung klik “Login”. Ketika Login berhasil, otomatis kita diarahkan ke “Halaman Dashboard”.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/dashboard.jpeg" className='w-full' width={800} height={450} />
                    </div>
                    <Text>Di halaman dashboard, terdapat banyak menu navigasi untuk mengakses halaman yang kita inginkan. Kalau ingin melihat dan membuat post atau artikel baru, kita bisa akses di menu “Posts”. Tampilan nya berikut ini.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/posts.png" className='w-full' width={800} height={450} />
                    </div>
                    <Text>Jika ingin melihat preview salah satu post, bisa klik title nya. Kita coba klik “Hello World” nya, dan tampil halaman ini. Kalau ingin custom post nya, tinggal klik dan edit sesuai keinginan. Jika sudah, bisa klik Update. Kemudian klik “Preview” untuk melihat halamannya.</Text>

                    <div className="my-10">
                        <Image src="/images/wordpress/previewpost.png" className='w-full' width={800} height={400} />
                    </div>
                    <Text>Itu sedikit artikel cara untuk membuat wordpress di local komputer kita. Selamat berkarya, dan see to the next post.</Text>
                </div>
            </ArticlesLayouts>
        </React.Fragment >
    )
}

export default Wordpress