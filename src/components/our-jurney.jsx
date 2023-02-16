import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Example() {
  const data = [
    {
      label: "Chapter 1",
      value: "25 October 2022 - 2 November 2022",
      desc: `devika pov: (25/10/2022) Aku seneng banget sih bisa ketemu lagi, waktu itu aku kesananya naik bis a.k.a ngeteng (nyambung-nyambung). Aku berangkat dari Lampung dari jam 9 pagi nyampe Bandung jam setengah 12 malem, kenapa bisa sampe jam segitu? soalnya bis Merak-Bandung nya ngetem lama banget sekitar 2 jam-an, padahal aku turun kapal sekitar setengah 2 siang dan asal kalian tau, pas aku sampe di Bandung ariq enggak jemput aku dengan alasan katanya sih ujan. Padahal kan enggak papa ya kalau misalkan ujan-ujanan gitu, dan akhirnya aku pesen Taxi Online buat ke kosannya. Pas sampe kosannya, aku disuguhin nasi goreng andalan bangsa. (26-27/10/2022) Waktu itu aku spend time ajasih sama dia (Makan, Tidur and Repeat), selama disini aku dikasih makan Ayam Bang Dava yang Geprek Sambal Matah setiap harinya. (28/10/2022) Setelah berabad-abad gak keluar kosan, akhirnya keluar kosan. Ariq ngajak aku ke Alun-Alun Bandung, karena kita haus jadi memutuskan buat cari minum di Parahyangan Plaza Mall dan rasanya enggak enak banget kan kalau minum enggak makan dan kebetulan kita laper belum makan jadi beli makan di Alun-Alun, seperti biasa ya kita makan-makanan andalan bangsa alias Ayam. Kita ketemu kucing yang aneh banget, masa dia dikasih ayam enggak mau, trus aku kasih tempe juga enggak mau tapi dia nyamperin pas udah dikasih tus tiba-tiba dia pergi. Trus setelah jam kemudian kita pindah lokasi ke Dipatiukur aliad DU, kita beli Jasuke (enak bgt jasuke DU). (29/10/2022) Kita mutusin buat StayCation di daerah Lembang, sebelum ke Lembang kita makan soto di Ciwaruga. Btw, kita StayCation di D'Valley View. Abis check in kita langsung ke Orchid Forest Cikole Lembang, disana cuma foto-foto, jalan-jalan, ya enaklah buat refreshing soalnya udaranya sejuk. Abis cape jalan, kita makan dulu di Orchid nya karena pas malem cuaca di Lembang dingin bnaget jadi kita mutusin buat makan mie rebus dan jagung bakar. (30/10/2022) Hari ini ke Floating Market Lembang, aku lagi nyari tahu gejrot soalnya pengen banget tapi akhirnya ketemu di Floating Market tapi sayang isinya dikit banget, kita juga beli mendoan sama dawet. Abis kenyang makan kita mutusin buat jalan-jalan lagi, karena cape jalan-jalan kita memutuskan untuk duduk di pinggir danau. Hal yang sangat amat tidak diinginkan itu terjadi, tiba-tiba Mamah Ariq dateng ke kosan katanyasih kejutan, dan parahnya udah didepan kamar kosannya banget, semua barang-barang aku di dalem kamar. Kita panik, minta bantuan temen-temen Ariq. Akhirnya yang bisa nolongin Ilham sama wahyu, untung ilham sama cewenya baik, Wahyu juga mau nolongin mindah-midahin barang aku kekamar dia. Akhirnya setelah nunggu berjam-jam, Mamah Ariq pulang dan malemnya kita Double Date sama Ilham. (31/10/2022) Aku pesen tiket Damri soalnya tanggal 2 mau pulang, abis itu kita makan Mie Gacoan. Aku temenin Ariq potong rambut soalnya mau photobooth di Timezone Bandung Indah Plaza. Abis itu malemnya kita ke District grill di Jl. Lengkong Kecil, abis makan kita mutusin buat jalan-jalan lagi, muter-muter, karena ayang belum tau Buah Batu jadi kita main kesana. (1/11/2022) Ariq ngajak aku jajan malem di DT (Daarut Tauhid) buat jajan kita beli Makaroni, Tahu Gejrot, Krepes. (2/11/2022) Seperti sebelumnya sarapan kita adalah Ayam Bang Dava-Geprek Sambal Matah, sebelum aku pulang Ariq ngajakin aku makan di Ramen AA, trus beli bola ubi sambil makan es krim di Mixue.`,
    },
    {
      label: "Chapter 2",
      value: "26 November 2022 - 18 Desember 2022",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Chapter 3",
      value: "25 Januari 2023 - 15 Februari 2023",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're 
        constantly trying to express ourselves and actualize our dreams.`,
    },

    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're 
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
