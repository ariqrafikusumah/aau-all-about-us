import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Lorem',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Lorem',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Lorem',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Lorem',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function SectionHeading() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Story</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          pada saat itu, kita bukan sepenuhnya 2 orang asing yang gak saling kenal karena pada dasarnya kita tetanggaan. tetangga yang jarang banget nyapa bahkan mungkin gapernah, rumah kita tuh padahal deket banget mungkin cuma 500 m. nah dulu kita pernah ikut satu kegiatan bareng, kegiatan kecil-kecilan kaya lomba gerak jalan gitu tapi tingkat RT wkwk dan dari situ kita kenal satu sama lain tapi waktu itu kita deket enggak lama karena kita beda sekolah, ya pada saat itu kita masih SMA jadi ya sibuk dengan urusan masing-masing dan pastinya punya pacar masing-masing, dan setelah lulus SMA kita enggak pernah ketemu lagi. setelah berabad-abad, wkwk enggak bercanda, setelah bertahun-tahun kita ketemu di salah satu kegiatan lagi, kita berdua diminta buat jadi MC di salah satu kegiatan RT yaitu 17 Agustusan biasalah lomba-lomba gitu, kita juga ikut di acara karnaval se-RW dan dari situ kita mulai deket lagi. perjalanan dimulai ketika aku main ke bandung.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
