import Image from 'next/image';
import { FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-40">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/VivekAppadurai.jpeg"
          alt="Vivek Appadurai"
          width={250}
          height={250}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold mt-4">Vivek Appadurai</h1>
        <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">Bioinformatician | Software Developer | Data Tinkerer</p>
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/vaqm2" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/vivek-appadurai-54a622192/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <FaLinkedin size={32} />
          </a>
          <a href="https://scholar.google.com/citations?user=sUD1UocAAAAJ&hl=en&oi=ao" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <FaGraduationCap size={32} />
          </a>
        </div>
      </div>
    </main>
  );
}