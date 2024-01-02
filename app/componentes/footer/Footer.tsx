import { lobster} from '@/app/ui/fonts'
export default function Footer() {
  return (
    <div className="w-11/12 mb-1 flex-wrap border-t-2 border-sky-700 p-1 my-auto mx-auto  fixed bottom-0 left-0 right-0  md:w-8/12 " >
        <p className={`text-white flex w-full md:text-lg items-center justify-center ${lobster.className} `}>©2024 Arkal Technologies. </p>
        <p className={`text-white flex w-full md:text-lg items-center justify-center ${lobster.className}`}>all rights reserved.</p>
    </div>
  )
}