import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 pt-24 sm:p-12 sm:pt-32 md:p-24 md:pt-40">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold dark:text-white">Resume</h1>
          <a
            href="/VivekAppaduraiCV.pdf"
            download
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I'm a bioinformatics professional with over 12 years of experience in pharmaceutical research, clinical science and academic settings, specializing in the development, modernization, and support of scientific software solutions and informatics processes. I possess proven expertise in Python, SQL, automating workflows, using high performance, cloud computing platforms, and contributing to AI/ML-enabled drug discovery initiatives. I'm adept at bridging scientific research needs with technical execution, driving data automation, and optimizing underlying databases. In addition, I have demonstrated strong problem-solving, collaboration and communication skills, learning agility, along with a commitment to delivering user-friendly, research-centric solutions within dynamic software ecosystems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><b>Programming & Scripting:</b> Python, R, Perl, SQL, Bash, Git, RESTful APIs, Docker.</li>
              <li><b>Software Development & DevOps:</b> Microservice Architecture, Azure pipelines for CI/CD, Agile Methodologies, Software System Maintenance & Enhancement, Technical Documentation.</li>
              <li><b>AI/ML:</b> Hypothesis Testing, Regression Modeling, Classification, Clustering, Imputation, Dimensionality Reduction, Conceptual & Logical Data Modeling, Ontologies.</li>
              <li><b>Data Management:</b> Relational Databases (Optimization & Restructuring), Data Registration, Metadata, Master and Reference Data Management, Data Lineage, Data Governance, Information Security, Data Complexity Management.</li>
              <li><b>Cloud & HPC:</b> AWS (S3, EC2), Sun Grid Engine, MOAB, LSF.</li>
              <li><b>Data Visualization:</b> Streamlit, Shiny, Dash, Tibco Spotfire.</li>
              <li><b>Domain Expertise:</b> Bioinformatics, RDKit, Omics Data Integration, Pharmaceutical Research & Development workflows.</li>
              <li><b>Languages:</b> English (Native speaker), Danish (Intermediate, passed PD3)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Senior Technical Data Steward, Novo Nordisk</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Maaloev, Denmark | Sep 2023 - Present</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">At Novo Nordisk, I led the development of a microservice application to improve metadata capture for AI/ML-driven drug discovery. I designed and implemented data models for the compound database, authored architectural decision records for modernization efforts, and established data governance standards. I also provided hands-on support in bioinformatics, data visualization, and machine learning, and mentored junior colleagues.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Postdoctoral Researcher, Institute of Biological Psychiatry</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Roskilde, Denmark | Apr 2021 - Sep 2023</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">As a Postdoctoral Researcher, I designed and built a comprehensive bioinformatics data infrastructure for the iPSYCH consortium. I led a research study using machine learning on genetic and transcriptomic data to identify novel genetic features for psychiatric disease research. I also collaborated with clinical researchers to identify and address critical research challenges.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Doctoral Intern in Bioinformatics, Lundbeck A/S</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Valby, DK | Aug 2020 - Oct 2020</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">During my internship at Lundbeck, I contributed to the target discovery phase by providing real-world evidence. I calculated the prevalence of loss-of-function mutations in potential targets for severe migraine, gaining direct experience in biopharma scientific software platforms.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">PhD Candidate, Institute of Biological Psychiatry</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Roskilde, DK | Jan 2018 - Apr 2021</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">As a PhD candidate, I led bioinformatics analyses for several research studies. I applied regression modeling and causal inference methods, and empirically estimated the impact of missing data imputation algorithms on genetic risk scores, demonstrating strong analytical and problem-solving skills.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Lead Bioinformatician, Institute of Biological Psychiatry</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Roskilde, DK | July 2016 - Dec 2018</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">In my role as Lead Bioinformatician, I led efforts to improve the quality of large exome sequencing datasets. I addressed data degradation issues and contributed to highly-cited studies, demonstrating my expertise in data analysis and quality improvement.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Bioinformatician, Human Genome Sequencing Center</h3>
                <p className="text-gray-600 italic dark:text-gray-400">Houston, TX USA | Mar 2012 – Jun 2016</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">At the Human Genome Sequencing Center, I developed software and automated workflows to identify candidate causal mutations for pediatric-onset mitochondrial diseases. I integrated evidence from open-source clinical variant repositories and applied machine learning-based variant effect prediction models, leading to a significant increase in the resolution of unsolved cases.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Scientific Programmer, The McDowell Genome Institute</h3>
                <p className="text-gray-600 italic dark:text-gray-400">St. Louis, USA | Jan 2010 - Dec 2011</p>
                <p className="text-gray-700 mt-2 dark:text-gray-300">As a Scientific Programmer at The McDowell Genome Institute, I developed software to improve the scaffolding quality of de novo genome assemblies. I delivered these assemblies to the UCSC genome browser and contributed to open-source scientific data repositories.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">University of Copenhagen</h3>
                <p className="text-gray-600 dark:text-gray-400">PhD in Biostatistics and Bioinformatics | Apr 2021</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Missouri University of Science and Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">MS in Electrical and Computer Engineering | Dec 2009</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Anna University</h3>
                <p className="text-gray-600 dark:text-gray-400">BE in Electronics Engineering | May 2006</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Awards</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Lundbeck Foundation - Postdoctoral Fellowship</h3>
                <p className="text-gray-600 dark:text-gray-400">Apr 2022</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4 dark:text-white">Extracurricular</h2>
            <p className="text-gray-700 dark:text-gray-300">
              I'm an avid runner (PRs 10k: 46.01, 5k: 22:30) and I enjoy reading neo-western, classical American, Russian literature when I'm not spending time with my soon to be one-year old daughter. Prior to becoming a dad, I volunteered with the coding pirates branch in Østerbro, teaching programming skills in Python and Javascript to teenagers.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
