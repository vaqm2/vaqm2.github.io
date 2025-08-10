import Image from 'next/image';

const publications = {
  "Select Publications": [
    {
        "Title": "Accuracy of haplotype estimation and whole genome imputation affects complex trait analyses in complex biobanks",
        "Authors": "<b>Vivek Appadurai</b>, Jonas Bybjerg-Grauholm, Morten Dybdahl Krebs, Anders Rosengren, Alfonso Buil, Andrés Ingason, Ole Mors, Anders D. Børglum, David M. Hougaard, Merete Nordentoft, Preben B. Mortensen, Olivier Delaneau, Thomas Werge & Andrew J. Schork",
        "Journal": "Communications Biology",
        "Year": "2023",
        "Link": "https://www.nature.com/articles/s42003-023-04477-y",
        "Thumbnail": "/Imputations.png",
        "Summary": "Biobanks are awesome for research, but they often use different technologies to collect data over many years. This can make it tricky to combine datasets. In this paper, we looked at how different ways of combining data affect our ability to study complex traits. We found that the methods we use to combine data can have a big impact on our results, and that we need to be especially careful when studying diverse populations."
    },
    {
        "Title": "Genetic predictors of educational attainment and intelligence test performance predict voter turnout",
        "Authors": "Lene Aarøe, <b>Vivek Appadurai</b>, Kasper M. Hansen, Andrew J. Schork, Thomas Werge, Ole Mors, Anders D. Børglum, David M. Hougaard, Merete Nordentoft, Preben B. Mortensen, Wesley Kurt Thompson, Alfonso Buil, Esben Agerbo & Michael Bang Petersen ",
        "Journal": "Nature Human Behaviour",
        "Year": "2020",
        "Link": "https://www.nature.com/articles/s41562-020-00952-2",
        "Thumbnail": "/VoterTurnout.png",
        "Summary": "Why do some people vote and others don't? We looked at the genetics of voter turnout and found that it's linked to the same genes that influence educational attainment and intelligence. This suggests that the resources people have for politics, like education and intelligence, play a role in whether they vote."
    },
    {
        "Title": "Genetics of suicide attempts in individuals with and without mental disorders: a population-based genome-wide association study",
        "Authors": "Annette Erlangsen, <b>Vivek Appadurai</b>, Yunpeng Wang, Gustavo Turecki, Ole Mors, Thomas Werge, Preben B. Mortensen, Anna Starnawska, Anders D. Børglum, Andrew Schork, Ron Nudel, Marie Bækvad-Hansen, Jonas Bybjerg-Grauholm, David M. Hougaard, Wesley K. Thompson, Merete Nordentoft & Esben Agerbo ",
        "Journal": "Molecular Psychiatry",
        "Year": "2020",
        "Link": "https://www.nature.com/articles/s41380-018-0218-y",
        "Thumbnail": "/SuicideAttempts.png",
        "Summary": "Suicide is a serious problem, and we know that it can run in families. In this study, we looked for specific genes that might be involved in suicide attempts. We found a few promising candidates, and we also found that the genetics of suicide attempts might be different in people with and without mental disorders."
    },
    {
        "Title": "PhD Thesis",
        "Authors": "<b>Vivek Appadurai</b>",
        "Journal": "University of Copenhagen",
        "Year": "2021",
        "Link": "/Thesis.pdf",
        "Thumbnail": "/Thesis.png",
        "Summary": "My PhD thesis is all about how to use large, complex biobanks to study complex traits like human behavior. I looked at the challenges of combining data from different sources, and I developed new methods for analyzing this type of data. My goal was to help researchers get the most out of these amazing resources."
    }
  ]
};

export default function Publications() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-24 sm:p-12 sm:pt-32 md:p-24 md:pt-40">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Publications</h1>
        <div className="grid grid-cols-1 gap-8">
          {publications["Select Publications"].map((pub, index) => (
            <div key={index} className="flex">
              <div className="mr-4">
                <Image src={pub.Thumbnail} alt={pub.Title} width={150} height={100} className="rounded-lg" />
              </div>
              <div>
                <a href={pub.Link} className="text-xl font-bold mt-4 dark:text-white hover:underline" download={pub.Title === 'PhD Thesis'}>
                  {pub.Title}
                </a>
                <p className="text-gray-600 mt-2 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: pub.Authors }}></p>
                <p className="text-gray-500 mt-2 dark:text-gray-300">{pub.Journal}, {pub.Year}</p>
                <p className="mt-4">{pub.Summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
